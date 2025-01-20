import LocaleSwitcher from "@/components/LocaleSwitcher";
import SignInForm from "../_components/AuthForm";

export default function SignInPage() {
  return (
    <div className="">
      <LocaleSwitcher />
      <SignInForm />
    </div>
  );
}
