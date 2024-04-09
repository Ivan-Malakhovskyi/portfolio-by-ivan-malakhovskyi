const Hero = () => {
  return (
    <section className="py-16">
      {" "}
      <h2 className="text-mainWhite mb-8">Hey there 🙌, my name is</h2>
      <div className="max-w-4xl">
        <h1 className="text-mainWhite text-7xl font-medium mb-8">
          Ivan Malakhovskyi Enthusiastic Full Stack Developer from
          Ukraine,Vinnytsia
        </h1>

        <p className="text-mainWhite mb-8">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque in
          harum culpa, reiciendis incidunt veritatis. Obcaecati aperiam porro
          expedita veniam qui id non? Maxime quis mollitia, ex at adipisci
          minus!
        </p>

        <a
          href="mailto:ivanmalahovskij121@gmail.com"
          className="text-mainBlack bg-mainGreen px-12 py-4 rounded-full hover:bg-addGreen transition ease-out duration-300"
        >
          Hire me
        </a>
      </div>
    </section>
  );
};

export default Hero;
