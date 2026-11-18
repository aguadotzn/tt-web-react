import styled from "styled-components";
import Link from "next/link";
import FormContainer from "../../components/Forms/FormContainer";
import FormHeader from "../../components/Forms/FormHeader";
import FormsFAQ from "../../components/Forms/FormsFAQ";
import { ButtonPrimary } from "../../components/Button";
import forms from "../../utils/forms.json";

// The site is now served as a static archive on GitHub Pages, so the
// sign-up forms (Google Sheets + SendGrid API routes) are no longer active.

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  flex-flow: column;
`;

const ClosedNotice = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 16px;
  padding: 24px 0;
  text-align: center;

  > h2 {
    margin: 0;
  }

  > p {
    margin: 0;
    max-width: 480px;
  }
`;

const SignUp = ({ form, formData }) => {
  return (
    <Container>
      <FormHeader
        title={formData.title}
        description={formData.description}
        variation={form}
      />
      <FormContainer>
        <ClosedNotice>
          <h2>Inscripciones cerradas</h2>
          <p>
            Ahora mismo no hay ninguna edición de Teach T3ch abierta, así que el
            formulario de inscripción no está disponible.
          </p>
          <Link href="/">
            <ButtonPrimary>Volver al inicio</ButtonPrimary>
          </Link>
        </ClosedNotice>
      </FormContainer>

      {formData.faqs && (
        <FormContainer>
          <FormsFAQ faqs={formData.faqs} />
        </FormContainer>
      )}
    </Container>
  );
};

export default SignUp;

export async function getStaticProps({ params }) {
  return {
    props: {
      form: params.form,
      formData: forms[params.form],
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { form: "full-power" } },
      { params: { form: "voluntarios" } },
    ],
    fallback: false,
  };
}
