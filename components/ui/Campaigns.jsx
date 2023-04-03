import CampaingItem from "./CampaingItem.jsx";

const Campaigns = () => {
  return (
    <div className="flex flex-wrap justify-center items-center mt-16 mb-16 gap-10 ">
      <CampaingItem />
      <CampaingItem />
      <CampaingItem />
    </div>
  );
};

export default Campaigns;
