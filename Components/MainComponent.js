import Image from "next/image";
import manspeaking from "../assets/images/manspeaking.png";
import colormphone from "../assets/images/colormphone.png";
export function MainComponent() {
  return (
    <div className="main_window">
      <div className="window">
        <div className="text">
          <h2 className="text-center heading mt-4">VOICE COORDINATOR</h2>
          <p className="p mt-3">
            You can record the speech of others while they are speaking and you
            can keep track of them through this app along with your voice
          </p>
        </div>
        <div className="info">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="dictate_info">
                <div className="imgs">
                  <Image src={manspeaking} />
                </div>
                <div className="">
                  <p className="ptag">
                    Speak normally but make sure your voice is clear and free of
                    hesitation muffling
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="listen_info ">
                <div className="imgs">
                  <Image src={colormphone} />
                </div>
                <div className="">
                  <p className="ptag2">
                    Get comfortable and make sure that your microphone is
                    working correctly
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="dynamic d-flex flex-column justify-content-center align-items-center">
          <div className="area mt-4">
            <textarea
              className="p-2"
              name=""
              id=""
              cols="70"
              rows="4"
            ></textarea>
          </div>
          <div className="icons d-flex flex-row">
            <div className="speaker"></div>
            <button>RESET</button>
            <div className="mike"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
