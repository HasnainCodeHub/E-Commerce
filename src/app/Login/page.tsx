import AuthForm from '../../Components/AuthForm';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <AuthForm isLogin={true} /> {/* Pass isLogin prop as true */}
    </div>
  );
}
