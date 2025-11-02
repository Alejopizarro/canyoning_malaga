const Bokun = () => {
  return (
    <>
      <script
        type="text/javascript"
        src="https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=b5f48f0c-7b7c-486c-830a-f76ae50e1d7b"
        async
      ></script>

      <div
        className="bokunWidget"
        data-src="https://widgets.bokun.io/online-sales/b5f48f0c-7b7c-486c-830a-f76ae50e1d7b/experience-calendar/1108108"
      ></div>
      <noscript>Please enable javascript in your browser to book</noscript>
    </>
  );
};

export default Bokun;
