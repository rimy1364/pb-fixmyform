"use client";

const WHATSAPP_NUMBER = "919205802858";
const MESSAGE = "Hi Prateek, I'd like to know more about FIX YOUR BODY coaching!";

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(MESSAGE)}`,
      "_blank"
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center rounded-full shadow-lg cursor-pointer transition-transform duration-200 hover:scale-110"
      style={{ width: "56px", height: "56px", background: "#25D366", border: "none", boxShadow: "0 4px 20px rgba(37,211,102,0.45)" }}
    >
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16 2C8.268 2 2 8.268 2 16c0 2.478.672 4.797 1.84 6.789L2 30l7.43-1.809A13.935 13.935 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
          fill="#fff"
        />
        <path
          d="M23.1 19.65c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.47-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51-.17-.01-.37-.01-.57-.01-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.22 1.36.19 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z"
          fill="#25D366"
        />
      </svg>
    </button>
  );
}
