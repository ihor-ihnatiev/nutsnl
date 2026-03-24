import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, ArrowLeft, Chrome } from "lucide-react";

interface LoginProps {
  onLoginSuccess: () => void;
}

export function Login({ onLoginSuccess }: LoginProps) {
  const [method, setMethod] = useState<
    "select" | "phone" | "email"
  >("select");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleSendOTP = async () => {
    setIsResending(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setOtpSent(true);
    setIsLoading(false);
    setIsResending(false);
  };

  const handleVerifyOTP = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsLoading(false);
    onLoginSuccess();
  };

  const handleGoogleAuth = async () => {
    setIsLoading(true);
    // Simulate OAuth flow
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsLoading(false);
    onLoginSuccess();
  };

  const handleBack = () => {
    setMethod("select");
    setOtpSent(false);
    setOtp("");
    setPhoneNumber("");
    setEmail("");
  };

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 flex items-center justify-center p-6 overflow-hidden">
      <div className="w-full max-w-md">
        <AnimatePresence mode="wait">
          {method === "select" ? (
            <motion.div
              key="select"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="space-y-6"
            >
              {/* Logo/Brand */}
              <div className="text-center mb-12">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 200,
                    damping: 15,
                  }}
                  className="w-24 h-24 bg-white rounded-3xl mx-auto mb-6 flex items-center justify-center shadow-2xl"
                >
                  <span className="text-5xl">📚</span>
                </motion.div>
                <h1 className="text-white mb-2">
                  Welcome to MCQ Reel
                </h1>
                <p className="text-white/80">
                  Learn something new every day
                </p>
              </div>

              {/* Auth Options */}
              <div className="space-y-4">
                {/* Google Auth */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleGoogleAuth}
                  disabled={isLoading}
                  className="w-full bg-white text-gray-900 rounded-2xl p-4 flex items-center justify-center gap-3 shadow-lg active:shadow-md transition-shadow disabled:opacity-50"
                >
                  <Chrome className="w-6 h-6 text-purple-600" />
                  <span className="font-semibold">
                    Continue with Google
                  </span>
                </motion.button>

                {/* Divider */}
                <div className="relative py-4">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-white/30"></div>
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-gradient-to-br from-purple-600 via-pink-600 to-orange-500 px-4 text-white/80 text-sm">
                      or continue with
                    </span>
                  </div>
                </div>

                {/* Phone OTP */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMethod("phone")}
                  className="w-full bg-white/10 backdrop-blur-sm text-white rounded-2xl p-4 flex items-center justify-center gap-3 border-2 border-white/20 shadow-lg active:shadow-md transition-shadow"
                >
                  <Phone className="w-6 h-6" />
                  <span className="font-semibold">
                    Phone Number
                  </span>
                </motion.button>

                {/* Email OTP */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setMethod("email")}
                  className="w-full bg-white/10 backdrop-blur-sm text-white rounded-2xl p-4 flex items-center justify-center gap-3 border-2 border-white/20 shadow-lg active:shadow-md transition-shadow"
                >
                  <Mail className="w-6 h-6" />
                  <span className="font-semibold">
                    Email Address
                  </span>
                </motion.button>
              </div>

              {/* Terms */}
              <p className="text-white/60 text-xs text-center mt-8">
                By continuing, you agree to our Terms of Service
                and Privacy Policy
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={method}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              {/* Back Button */}
              <button
                onClick={handleBack}
                className="flex items-center gap-2 text-gray-600 mb-6 active:scale-95 transition-transform"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </button>

              {/* Form */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-gray-900 mb-2">
                    {method === "phone"
                      ? "Phone Number"
                      : "Email Address"}
                  </h2>
                  <p className="text-gray-500">
                    {otpSent
                      ? "Enter the OTP sent to your " + method
                      : "We'll send you a verification code"}
                  </p>
                </div>

                {!otpSent ? (
                  <>
                    {method === "phone" ? (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          value={phoneNumber}
                          onChange={(e) =>
                            setPhoneNumber(e.target.value)
                          }
                          placeholder="+1 (555) 123-4567"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors"
                        />
                      </div>
                    ) : (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={email}
                          onChange={(e) =>
                            setEmail(e.target.value)
                          }
                          placeholder="you@example.com"
                          className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors"
                        />
                      </div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleSendOTP}
                      disabled={
                        isLoading ||
                        (method === "phone"
                          ? phoneNumber.length < 10
                          : !email)
                      }
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading ? "Sending..." : "Send OTP"}
                    </motion.button>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Verification Code
                      </label>
                      <input
                        type="text"
                        value={otp}
                        onChange={(e) =>
                          setOtp(
                            e.target.value
                              .replace(/\D/g, "")
                              .slice(0, 6),
                          )
                        }
                        placeholder="000000"
                        maxLength={6}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-600 focus:outline-none transition-colors text-center text-2xl tracking-widest font-mono"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={handleVerifyOTP}
                      disabled={isLoading || otp.length !== 6}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl p-4 font-semibold shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isLoading
                        ? "Verifying..."
                        : "Verify OTP"}
                    </motion.button>

                    <button
                      onClick={handleSendOTP}
                      disabled={isResending || isLoading}
                      className="w-full text-purple-600 font-medium text-sm active:scale-95 transition-transform disabled:opacity-50"
                    >
                      {isResending
                        ? "Resending..."
                        : "Resend OTP"}
                    </button>
                  </>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading Overlay */}
        {isLoading && method === "select" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50"
          >
            <div className="bg-white rounded-2xl p-8 flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin" />
              <p className="text-gray-900 font-medium">
                Signing you in...
              </p>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}