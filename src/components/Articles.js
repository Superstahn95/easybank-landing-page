import React from "react";
import currencyImg from "../assets/image-currency.jpg";
import restaurantImg from "../assets/image-restaurant.jpg";
import planeImg from "../assets/image-plane.jpg";
import confettiImg from "../assets/image-confetti.jpg";

function Articles() {
  return (
    <section>
      <div className="container w-10/12 mx-auto py-6">
        <h1 className="text-[#2D314D] text-4xl py-4">Latest Articles</h1>
        <div className="grid md:grid-cols-4 gap-8 my-7">
          <div className="shadow-md">
            <img src={currencyImg} alt="/" className="max-w-100" />
            <div className="p-5 text-black/40">
              <p>
                {" "}
                <small className="text-sm">By Claire Robinson</small>{" "}
              </p>
              <p className="text-[#2D314D] py-3 text-xl">
                Receive money in any currency with no fees
              </p>
              <p className="text-sm">
                The world is getting more smaller and we are becoming more
                mobile. So why should you be forced to receive money in a
                single....
              </p>
            </div>
          </div>
          <div className="shadow-md">
            <img src={restaurantImg} alt="/" className="max-w-100" />
            <div className="p-5 text-black/40">
              <p>
                {" "}
                <small className="text-sm">By Wilson Hutton</small>{" "}
              </p>
              <p className="text-[#2D314D] py-3 text-xl">
                Treat yourself without worrying about money
              </p>
              <p className="text-sm">
                Our simple budgeting feature allows you to separate out your
                spending and set realistic limits each month. This means....
              </p>
            </div>
          </div>
          <div className="shadow-md">
            <img src={planeImg} alt="/" className="max-w-100" />
            <div className="p-5 text-black/40">
              <p>
                {" "}
                <small className="text-sm">By Wilson Hutton</small>{" "}
              </p>
              <p className="text-[#2D314D] py-3 text-xl">
                Take your EasyBank card wherever you go
              </p>
              <p className="text-sm">
                We want you to enjoy ypur travels, this is why we don't chargea
                ny fees on purchases while you're abroad. We'll even show
                you......
              </p>
            </div>
          </div>
          <div className="shadow-md">
            <img src={confettiImg} alt="/" className="max-w-100" />
            <div className="p-5 text-black/40">
              <p>
                {" "}
                <small className="text-sm">By Claire Robinson</small>{" "}
              </p>
              <p className="text-[#2D314D] py-3 text-xl">
                Our invite only beta accounts are now live
              </p>
              <p className="text-sm">
                After a lot of hardwork by the whole team, we are excited to
                lunch our close beta. It's easy to request an invite through the
                site.....
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
