// src/pages/login.tsx
import AuthForm from '../Components/AuthForm'; // Ensure this path is correct

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm isLogin={true} /> {/* Pass isLogin as true for the login form */}
    </div>
  );
}
