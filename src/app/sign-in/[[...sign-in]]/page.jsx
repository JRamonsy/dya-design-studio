import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <SignIn 
        redirectUrl="/admin"
        appearance={{
          layout: {
            // Ajustes de layout
            logoImageUrl: '/imgs/logo-dya.png', // Opcional: tu logo
            logoPlacement: 'inside', // o 'outside'
          },
          elements: {
            // OCULTA "Don't have an account? Sign up"
            footer: { 
              display: 'none' 
            },
            // Personaliza otros elementos si quieres
            card: {
              boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.1)",
              border: "1px solid #e5e7eb",
              borderRadius: "0.5rem",
            },
            headerTitle: {
              fontSize: "1.5rem",
              fontWeight: "600",
            },
            formButtonPrimary: {
              backgroundColor: "#000",
              fontSize: "0.875rem",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#333",
              }
            },
            socialButtonsBlockButton: {
              "&:hover": {
                backgroundColor: "#f3f4f6",
              }
            }
          },
          variables: {
            colorPrimary: "#000000",
            colorText: "#111827",
          }
        }}
        // Esto también ayuda: si alguien intenta ir a sign-up, redirige
        signUpUrl="/"
      />
    </div>
  );
}