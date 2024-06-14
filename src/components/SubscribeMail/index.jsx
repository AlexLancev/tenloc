import React from "react";
import { ListSocialNetworks } from "../ListSocialNetworks";
import SubscribeMailBg from "../../img/subscription-mail.png";

const SubscribeMail = () => {
  return (
    <div className="container">
      <section className="subscribe-mail" style={{backgroundImage: `url(${SubscribeMailBg})`}}>
        <div className="subscribe-mail__inner">
          <h2 className="subscribe-mail__title">
            Подпишитесь на нашу рассылку
          </h2>
          <p className="subscribe-mail__text">
            Подписывайтесь на удобный для Вас мессенджер
          </p>
          <ListSocialNetworks className="subscribe-mail__social-networks" />
          <p className="subscribe-mail__policy">
            При переходе в одну из указанных социальных сетей, вы автоматически
            соглашаетесь с
            <a className="subscribe-mail__policy-link" href="/">
              политикой конфидециальности
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export { SubscribeMail };
