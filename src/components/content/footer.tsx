const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer>
      <div className="flex items-center justify-between font-bellefair sm:text-2xl text-sm text-secondary md:py-10 py-8">
        <h3
          className="hover:text-primary ease-in-out duration-300"
          onClick={() => handleScrollToTop()}
        >
          back ↑
        </h3>
        <p>© Mohammad Gholipour, 2024</p>
      </div>
    </footer>
  );
};

export default Footer;
