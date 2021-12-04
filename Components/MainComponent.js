// import Router from "next/router";
import Image from "next/image";
import "regenerator-runtime/runtime";
import Head from "next/head";
import manspeaking from "../assets/images/manspeaking.png";
import colormphone from "../assets/images/colormphone.png";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export function MainComponent({ history }) {
  const commands = [
    {
      command: "clear all",
      callback: ({ resetTranscript }) => resetTranscript(),
    },
    {
      command: "take me to *",
      callback: (website) => {
        window.open("http://" + website);
      },
    },

    // https://www.google.com/search?q=romantic+songs&sxsrf=AOaemvKD3BPmHpJcixK6dAMjSBg_OBVJLg%3A1638612910259&source=hp&ei=rj-rYavXDY_S1sQP-oSamAc&iflsig=ALs-wAMAAAAAYatNvgsVlO8YxktIykFcwoKH3Nv3DGR0&gs_ssp=eJzj4tVP1zc0TDbOLShIqqwwYPTiK8rPTcwryUxWKM7PSy8GAJ-rCqU&oq=romatic+onsgs&gs_lcp=Cgdnd3Mtd2l6EAMYADIHCC4QsQMQDTIECC4QDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDTIECAAQDToECCMQJzoRCC4QgAQQsQMQgwEQxwEQrwE6BQgAEIAEOg4ILhCABBCxAxDHARDRAzoICC4QsQMQgwE6BQguEIAEOgsIABCABBCxAxCDAToOCC4QgAQQsQMQxwEQowI6CwguEIAEELEDEIMBOggILhCABBCxAzoICAAQgAQQsQM6BwguELEDEAo6BwgAELEDEAo6BAgAEAo6CAgAELEDEIMBOgUIABCxA1AAWLcbYPInaAFwAHgBgAGQA4gBmBOSAQowLjEyLjEuMC4xmAEAoAEB&sclient=gws-wiz
    {
      command: "play *",
      callback: (website) => {
        window.open("http://google.com/search?q=" + website);
      },
    },
    {
      command: "open youtube channel of *",
      callback: (website) => {
        window.open("http://youtube.com/" + website);
      },
    },
    {
      command: "animate the web app",
      callback: (website) => {
        window.open("http://youtube.com/" + website);
      },
    },
  ];

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  if (!browserSupportsSpeechRecognition) {
    // return Router.push({
    //   pathname: "/error",
    // });
  }

  const speaker = () => {
    var textmsg = new SpeechSynthesisUtterance();
    textmsg.text = document.getElementById("textarea").innerHTML;
    window.speechSynthesis.speak(textmsg);
  };

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
          defer
        />{" "}
      </Head>
      <div className="main_window">
        <div className="window">
          <div className="text">
            <h2 className="text-center heading mt-4">VOICE COORDINATOR</h2>
            <p className="p mt-3">
              You can record the speech of others while they are speaking and
              you can keep track of them through this app along with your voice
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
                      Speak normally but make sure your voice is clear and free
                      of hesitation muffling
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
                className="p-2 "
                name=""
                value={transcript}
                id="textarea"
                cols="70"
                rows="4"
              ></textarea>
            </div>
            <div className="icons d-flex flex-row justify-content-around align-items-center">
              <div className="speaker" onClick={speaker}>
                {listening ? (
                  <img src="https://img.icons8.com/ios-filled/50/000000/mute.png" />
                ) : (
                  <img src="https://img.icons8.com/ios-filled/40/000000/speaker.png" />
                )}
              </div>
              <button onClick={resetTranscript}>RESET</button>
              <div className="mike" onClick={SpeechRecognition.startListening}>
                {listening ? (
                  <img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/48/000000/external-microphone-radio-vitaliy-gorbachev-flat-vitaly-gorbachev.png" />
                ) : (
                  <img src="https://img.icons8.com/ios-filled/48/000000/no-microphone--v1.png" />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
