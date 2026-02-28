import { useState } from "react";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { UserPlus, Loader2, CheckCircle } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const COMMON_PASSWORDS = [
  "password", "123456", "12345678", "qwerty", "admin", "letmein",
  "welcome", "monkey", "dragon", "master", "abc123", "login",
];

function validatePassword(password: string): { valid: boolean; error?: string; strength: number } {
  if (password.length < 10) {
    return { valid: false, error: "Password must be at least 10 characters.", strength: 10 };
  }

  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[!@#$%^&*(),.?":{}|<>\-_=+\[\]\\\/~`]/.test(password);

  const complexityCount = [hasUppercase, hasLowercase, hasNumber, hasSpecial].filter(Boolean).length;
  if (complexityCount < 3) {
    return {
      valid: false,
      error: "Include at least 3 of: uppercase, lowercase, numbers, symbols.",
      strength: 30,
    };
  }

  const lower = password.toLowerCase();
  if (COMMON_PASSWORDS.some((p) => lower.includes(p))) {
    return { valid: false, error: "Password contains common patterns. Choose something unique.", strength: 20 };
  }

  const strength = Math.min(100, 40 + complexityCount * 10 + Math.min(password.length - 10, 10) * 2);
  return { valid: true, strength };
}

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [pwFeedback, setPwFeedback] = useState<{ error?: string; strength: number } | null>(null);
  const { toast } = useToast();

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    if (value.length > 0) {
      const { error, strength } = validatePassword(value);
      setPwFeedback({ error, strength });
    } else {
      setPwFeedback(null);
    }
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    const { valid, error } = validatePassword(password);
    if (!valid) {
      toast({ title: "Weak password", description: error, variant: "destructive" });
      return;
    }
    setLoading(true);

    const { error: signupError } = await supabase.auth.signUp({
      email,
      password,
      options: { emailRedirectTo: window.location.origin },
    });

    if (signupError) {
      toast({ title: "Signup failed", description: signupError.message, variant: "destructive" });
    } else {
      setSuccess(true);
    }
    setLoading(false);
  };

  const strengthColor = (s: number) => (s >= 70 ? "bg-green-500" : s >= 40 ? "bg-yellow-500" : "bg-red-500");

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 px-4">
        <Card className="w-full max-w-md text-center">
          <CardHeader>
            <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-2" />
            <CardTitle>Check your email</CardTitle>
            <CardDescription>We sent a confirmation link to <strong>{email}</strong>. Click it to activate your account.</CardDescription>
          </CardHeader>
          <CardFooter className="justify-center">
            <Link to="/login" className="text-primary hover:underline text-sm">Back to login</Link>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 px-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Create Account</CardTitle>
          <CardDescription>Sign up to access the AI Dashboard</CardDescription>
        </CardHeader>
        <form onSubmit={handleSignup}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Min. 10 characters, mix of types" value={password} onChange={(e) => handlePasswordChange(e.target.value)} required />
              {pwFeedback && (
                <div className="space-y-1">
                  <Progress value={pwFeedback.strength} className={`h-1.5 ${strengthColor(pwFeedback.strength)}`} />
                  {pwFeedback.error && (
                    <p className="text-xs text-destructive">{pwFeedback.error}</p>
                  )}
                  {!pwFeedback.error && (
                    <p className="text-xs text-green-600">Strong password ✓</p>
                  )}
                </div>
              )}
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <UserPlus className="h-4 w-4" />}
              Create Account
            </Button>
            <Link to="/login" className="text-sm text-muted-foreground hover:underline">Already have an account? Sign in</Link>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Signup;
