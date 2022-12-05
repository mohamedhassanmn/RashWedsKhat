const ModalConformation = ({ setConformBooking }) => {
  const handleModalClose = () => setConformBooking(false);
  const handleInnerClick = (e) => {
    e.stopPropagation();
  };
  const handleConformation = () => {
    handleModalClose();
  };
  return (
    <div
      onClick={handleConformation}
      class="fixed w-full h-full bg-black/40 top-0 left-0 overflow-hidden z-50 flex justify-center items-center"
    >
      <div
        onClick={handleInnerClick}
        class="bg-white p-10 flex items-center flex-col"
      >
        <div class="font-thick text-2xl">
          Click To Conform <br />
          your Booking
        </div>
        <div
          onClick={handleConformation}
          class="bg-pink-500 rounded-2xl p-4 font-thick mt-6 text-white"
        >
          Conform
        </div>
      </div>
    </div>
  );
};

export default ModalConformation;
