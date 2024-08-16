export const data = [
  {
    id: "product1",
    slug: "product1",
    title: "The Los Angeles / Long Beach archive",
    author: "Radio Archive",
    imageUrl:
      "https://s3.amazonaws.com/radio-archive.org.site/images/radio.stack.sepia.png",
    description:
      "We are quickly approaching our first one million hours of continuous recordings with hundreds more being added each day. This is a truly unique competitive advertising resource.",
    content:
      "We are quickly approaching our first one million hours of continuous recordings with hundreds more being added each day. This is a truly unique competitive advertising resource. The content will eventually be part of a digital museum for the general public and historical research. Contact us (below) for access or be the first to sponsor a new geographic area.",
  },
  {
    id: "product2",
    slug: "product2",
    title: "The Collector Technology",
    author: "Radio Archive",
    imageUrl:
      "https://s3.amazonaws.com/radio-archive.org.site/images/controls_sepia.png",
    description:
      "Lowering collection costs means more complete archives.",
    content:
      "Lowering collection costs means more complete archives. Our custom software runs on commodity pc hardware / linux and uses consumer grade SDRs. It is capable of capturing any radio spectrum from 100 Khz to 6 Ghz, equipped with real-time, software-based demodulation capabilities for AM, FM, HD radio, and SSB. It can perform these functions at a fraction of the cost of industry standard methods, which often require one tuner per channel or multi-tuner cards. We can collect the entire FM or AM band (as quadrature data) with a single software defined radio. All of this with zero commercial license dependencies or monthly fees. All processing takes place on the appliance so no internet access is required even when real-time speech-to-text transcription is configured. This enables extremely remote deployments. Contact us (below) to license your own collector.",
  },
  {
    id: "product3",
    slug: "product3",
    title: "The Transcriber Technology",
    author: "Radio Archive",
    imageUrl:
      "https://s3.amazonaws.com/radio-archive.org.site/images/keyboard.vintage.sepia.png",
    description:
      "Early in the radio-archive project we were faced with the high market costs of transcribing millions of hours of continuous audio.",
    content:
      "Early in the radio-archive project we were faced with the high market costs of transcribing millions of hours of continuous audio. Just for the first 500,000 hours we had already recorded it would have cost over $253,000 using AWS Transcribe (based on Amazon's own cost estimator). Over 50 cents per hour and that's just for the transcribe calls; not even the whole batch processing solution! We needed to figure out how to do this and keep the total costs closer to 1 cent / hour yet still do it quickly. And if we could leverage any old Nvidia gaming GPUs we had lying around perhaps we could bring this cost down even further. So we set upon building a self managing (whisper based) distributed transcription processing appliance strictly to solve our own problem. The whisper part is in ()'s because the transcriber part is swappable but we have not found a faster/more accurate option than (OpenAI's) Whisper . This appliance saved us over $200,000 in processing costs! It even scales up and down automatically as we add/remove GPU hardware from our pool. If you need to transcribe 10's of thousands to hundreds of thousands of hours per month with high accuracy (from 86% - 96% depending on settings), it could save you too. (contact us directly for details )",
  },
];
