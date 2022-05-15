import Cor1 from "../image/cor-1.jpg";
import Cor2 from "../image/cor-2.jpg";
import Cor3 from "../image/cor-3.jpg";
import Cor4 from "../image/cor-4.jpg";
import Cor5 from "../image/cor-5.jpg";
import Cor6 from "../image/cor-6.jpg";
import Cor7 from "../image/cor-7.jpg";
import Cor8 from "../image/cor-8.jpg";
import Cor9 from "../image/cor-9.jpg";
import Video1 from "../video/fitness.mp4";
import Video2 from "../video/bodybuild.mp4";
import Video3 from "../video/deadlift.mp4";
import Video4 from "../video/boxing.mp4";
import Video5 from "../video/trx.mp4";
import Video6 from "../video/rope.mp4";
import Video7 from "../video/dunk.mp4";
import Video8 from "../video/yoga.mp4";
import Video9 from "../video/food.mp4";
const data = {
  cardData: [
    {
      id: 1,
      imgSrc: Cor1,
      title: "重訓減脂",
      desc: "要減除身體的脂肪，不可忽視的一項運動就是無氧運動，就是俗稱的重量訓練，具有增強新陳代謝並且維持代謝高峰24~48小時。",
      detail:
        "在重訓減脂的階段，建議將訓練部位分為胸、背、腿、肩，並且一天訓練一個部位，這樣每個訓練部位可以有充分的刺激，並且在其他訓練日也能稍做休息恢復，達到全身肌肉完整訓練來提升新陳代謝，消耗更多的熱量，才有良好的減脂效果。",
      video: Video1,
    },
    {
      id: 2,
      imgSrc: Cor2,
      title: "健美增肌",
      desc: "重量訓練也能幫助從小吃不胖、瘦小身形的朋友們增加身體的肌肉量，來達到自己理想的壯碩身材。",
      detail:
        "增肌訓練與減脂時將每個部位分離出來訓練的方法一樣，只是訓練強度要更高，並且每日飲食熱量需些微超過身體所消耗熱量，才能幫助肌纖維變粗，達到肌肥大的效果。",
      video: Video2,
    },
    {
      id: 3,
      imgSrc: Cor3,
      title: "健力三項",
      desc: "你喜歡追求數字上的突破嗎? 健力者們追求舉得更重，運用全身神經連結，一鼓作氣拉起沉重的槓鈴吧。",
      detail:
        "健力三項指的就是，硬舉、深蹲、臥推這三個動作，需要透過神經連結徵招全身的肌肉一起發力，才可能將重於體重2、3倍的重量給拉起或推起，訓練原則則是專注於三項訓練，在重量越重、身體壓力越大的情況下，如何保持身體核心穩定，用全身將力量發揮出來。",
      video: Video3,
    },
    {
      id: 4,
      imgSrc: Cor4,
      title: "拳擊燃脂",
      desc: "配合拳擊手訓練的動作，敏捷的腳步、痛快地出拳，隨著音樂緩急的律動，可達到等同高強度有氧的燃脂效果。",
      detail:
        "有氧拳擊可以使拳者在短時間內提高心跳率及鍛鍊肌耐力，達到高效燃脂的效果。 此項運動除了能加強心肺功能，也會同步訓練到手臂、背部、胸部肌肉、核心、臀部及腿部，屬於全身性的運動的一種。 有氧拳擊能鍛鍊全身的協調性，而這個過程也有助於雕塑身型。",
      video: Video4,
    },
    {
      id: 5,
      imgSrc: Cor5,
      title: "TRX懸吊課程",
      desc: "TRX是近年歐美最流行的健身方式，是全身性的肌力訓練，藉由調整身體的角度，對肌肉的刺激效果能夠更深層。",
      detail:
        "TRX 起源於美國海豹突擊隊採用高密度纖維製成的毛巾，也有人說是降落傘的繩索，一開始掛在樹枝等高處，手抓住兩端引導身體往上的動作，希望在環境受限下維持體格鍛鍊。TRX是利用體重作為阻力，調整身體傾斜角度或姿勢控制活動強度，研究指出，TRX可以訓練到深層肌肉，效果會比在平地訓練肌力效果更好。",
      video: Video5,
    },
    {
      id: 6,
      imgSrc: Cor6,
      title: "高強度循環",
      desc: "結合有氧及阻力訓練，只需要簡便的器材就能運動，是目前公認最有效的有氧無氧混合燃脂運動。",
      detail:
        "高強度循環訓練簡稱HIIT，常見的訓練動作為波比跳、登山者、高抬腿、深蹲跳..等，原理是「運動+小休」相間的運動模式，通過於短時間內作高強度運動訓練和短暫休息作循環訓練，達至燃燒卡路里的效果。HIIT的運動強度可使心跳率達至最大的80%，強化心肺功能，達到消脂減肥效果。",
      video: Video6,
    },
    {
      id: 7,
      imgSrc: Cor7,
      title: "運動力提升",
      desc: "運動表現包含肌肉爆發力、肌耐力、核心肌群穩定，藉由協調身體各部位肌肉，強化心肺耐力、速度、跳躍力等運動表現。",
      detail:
        "運動表現包含了肌力、速度、耐力，這3個要素通常是體能訓練主要軸心，因此評估這3種能力，可以用來代表一名運動員的運動能力水準。當然「頂尖」運動員，在這3種元素裡面肯定至少有2項高人一等，優異的運動表現除了經驗與天賦，更重要的是來自身體素質的養成。",
      video: Video7,
    },
    {
      id: 8,
      imgSrc: Cor8,
      title: "筋膜伸展",
      desc: "鍛鍊完身體後，身體的肌肉與筋膜可透過伸展運動，快速恢復肌肉彈性，並且有放鬆心情、降低壓力的好處",
      detail:
        "筋膜是包覆在肌肉外面的結締組織，其是由排列緊密的膠原纖維組成，就像一張堅韌的薄膜包裹著肌肉纖維，筋膜伸展主要可以幫助 1.改善血液循環 2.提升關節活動性 3.降低壓力 4.減少肌肉痠痛，只要有上述的四個助益，就能讓身體的活動進入正向循環，自然也能提高生活品質。",
      video: Video8,
    },
    {
      id: 9,
      imgSrc: Cor9,
      title: "飲食調配",
      desc: "在追求強健的體魄中，飲食才是佔健康因素最大的關鍵，藉由營養計畫調配出最佳飲食方式，邁向健康活力的生活吧。",
      detail:
        "勤奮地鍛鍊，當然也要搭配相應的飲食，健身者不可或缺的就是優良蛋白質(可多攝取雞肉、魚肉、牛肉)，優良的碳水化合物(糙米、燕麥、藜麥、地瓜)，還有各種蔬菜，有助於鍛鍊後的身體恢復機能，更能為日常生活帶來活力。",
      video: Video9,
    },
  ],
};

export default data;
