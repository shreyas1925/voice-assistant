import Image from "next/image";
export function MainComponent() {
  return (
    <div className="main_window">
      <div className="window">
        <div className="text text-center">
          <h2 className="mt-4">VOICE COORDINATOR</h2>
          <p className="text-center mt-3">
            You can record the speech of others while they are speaking and you
            can keep track of them through this app along with your voice
          </p>
        </div>
        <div className="info">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="dictate_info">
                <Image src={} />
                <p>
                  Speak normally but make sure your voice is clear and free of
                  hesitation muffling
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="listen_info">
                <Image src={} />
                <p>
                  Get comfortable and make sure that your microphone is working
                  correctly
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
