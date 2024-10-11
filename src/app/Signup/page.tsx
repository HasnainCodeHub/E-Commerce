import AuthForm from '../../Components/AuthForm';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <AuthForm isLogin={false} /> {/* Pass isLogin prop as false */}
    </div>
  );
}
