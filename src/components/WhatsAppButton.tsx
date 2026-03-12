import { MessageCircle } from "lucide-react";

export const WhatsAppButton = () => {
  const phoneNumber = "+919510001788"; // Replace with your WhatsApp number

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-[hsl(142_70%_45%)] hover:bg-[hsl(142_70%_40%)] shadow-lg hover:shadow-xl flex items-center justify-center transition-all duration-300 animate-[whatsapp-bob_10s_ease-in-out_infinite] group"
      aria-label="Chat on WhatsApp"
    >
      <svg
        viewBox="0 0 32 32"
        className="w-7 h-7 text-white fill-current group-hover:scale-110 transition-transform"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.9 15.9 0 0 0 16.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.338 22.594c-.392 1.1-1.942 2.014-3.178 2.28-.846.18-1.95.322-5.668-1.218-4.76-1.97-7.822-6.794-8.06-7.11-.228-.316-1.916-2.55-1.916-4.864 0-2.314 1.214-3.452 1.644-3.924.392-.43 1.036-.61 1.65-.61.198 0 .376.01.536.018.472.02.71.048 1.022.788.392.926 1.344 3.278 1.462 3.516.12.238.238.554.078.87-.15.316-.278.514-.516.788-.238.276-.498.616-.71.826-.238.238-.486.496-.21.97.278.472 1.232 2.032 2.646 3.292 1.818 1.62 3.35 2.124 3.822 2.36.472.238.748.198 1.024-.118.278-.316 1.186-1.382 1.504-1.858.316-.472.634-.394 1.066-.236.434.158 2.786 1.314 3.258 1.554.474.238.79.358.908.554.118.198.118 1.14-.274 2.24z" />
      </svg>
    </a>
  );
};
