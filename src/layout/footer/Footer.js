const Footer = () => {
  return (
    <footer className="footer bg-warning shadow py-3 mt-5">
      <div className="container">
        <h5 className="text-center">
          &copy; CopyRight Reserved {new Date().getFullYear()}
        </h5>
      </div>
    </footer>
  );
};

export default Footer;
