import { CheckCircle, X } from 'lucide-react';

interface SuccessToastProps {
  isOpen: boolean;
  onClose: () => void;
  message: string;
  title?: string;
}

export function SuccessToast({
  isOpen,
  onClose,
  message,
  title = 'Success!'
}: SuccessToastProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed top-4 right-4 z-50 animate-slideIn">
      <div className="bg-white rounded-lg shadow-xl max-w-sm w-full border-l-4 border-green-500">
        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm text-gray-900 mb-1">
                {title}
              </h3>
              <p className="text-sm text-gray-600">
                {message}
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-1 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
