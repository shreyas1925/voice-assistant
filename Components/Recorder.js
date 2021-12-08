// import { useState } from "react";
// import { Recorder } from "react-voice-recorder";
// import "react-voice-recorder/dist/index.css";

// const Recorders = () => {
//   const [state, setState] = useState({
//     audioDetails: {
//       url: null,
//       blob: null,
//       chunks: null,
//       duration: {
//         h: 0,
//         m: 0,
//         s: 0,
//       },
//     },
//   });

//   const handleAudioStop = (data) => {
//     console.log(data);
//     setState({ audioDetails: data });
//   };

//   const handleAudioUpload = (file) => {
//     console.log(file);
//     // window.open("www.google.com" + file);
//   };

//   const handleCountDown = (data) => {
//     console.log(data);
//   };

//   const handleReset = () => {
//     const reset = {
//       url: null,
//       blob: null,
//       chunks: null,
//       duration: {
//         h: 0,
//         m: 0,
//         s: 0,
//       },
//     };
//     setState({ audioDetails: reset });
//   };

//   return (
//     <div className="main_recorder">
//       <Recorder
//         record={true}
//         title={"New recording"}
//         audioURL={state.audioDetails.url}
//         showUIAudio
//         handleAudioStop={(data) => handleAudioStop(data)}
//         handleAudioUpload={(data) => handleAudioUpload(data)}
//         handleCountDown={(data) => handleCountDown(data)}
//         handleReset={() => handleReset()}
//         mimeTypeToUseWhenRecording={`audio/webm`} // For specific mimetype.
//       />
//     </div>
//   );
// };

// export default Recorders;
