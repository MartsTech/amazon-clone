interface FooterDisclaimerProps {}

const FooterDisclaimer: React.FC<FooterDisclaimerProps> = () => {
  return (
    <div
      className="text-base bg-[#1a1a2c] text-white
          py-4 px-12"
    >
      <strong>Disclaimer:</strong> This is not the official Amazon Store. It is
      a redesign, built purely for educational purpose.
    </div>
  );
};

export default FooterDisclaimer;
