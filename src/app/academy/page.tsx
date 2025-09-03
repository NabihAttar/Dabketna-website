import React from "react";
import GenresDetailsMainArea from "../genres-details/page";

const EventBg = "/assets/img/event/event-bg-4.jpg";

type TProps = {
  title: string | undefined;
};

const BradcrumbThree = ({ title }: TProps) => {
  return (
  <section>
 


      <GenresDetailsMainArea />
    </section>
  );
};

export default BradcrumbThree;
