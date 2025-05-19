import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { darkBlue, font_pressStart2P, grayWhiter, white, whiteDarker } from "@/configs/colors";
import heroBg from "@/img/hero-bg.png"
import sectionIconServers from "@/img/section-icon-servers.png"
import sectionImgServers from "@/img/section-img-servers.png"
import sectionIconTexture from "@/img/section-icon-texture.png"
import sectionImgTexture from "@/img/section-img-texture.png"
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
      <div style={{ backgroundImage: `url(${heroBg.src})` }} className="bg-fixed bg-no-repeat bg-cover py-[300px]">
        <div className="container">
          <h1 className="text-shadow-lg mb-[40px] text-[60px] font-bold text-white text-center mx-auto">MINE <span className="bg-orange-600 px-[12px] rounded">HUB</span></h1>
          <div className="w-[300px] mx-auto">
            <Input className="text-white bg-white/10 backdrop-blur-xl" placeholder="Поиск..."/>
          </div>
        </div>
      </div>
      <section className={`py-[60px]`} style={{ backgroundColor: darkBlue }}>
        <div className="container">
          <h2 className={`mb-[40px] text-shadow-md text-[40px] font-bold text-center mx-auto`} style={{ color: white }}>
            MINEHUB — Больше, чем сундук с ресурсами
          </h2>
          <p className={`w-[800px] mx-auto text-center text-[20px]`} style={{ color: grayWhiter }}>Добро пожаловать на MINEHUB — место, где майнкрафтеры находят всё: от крутых модов и сборок до гайдов, скинов и серверов. Всё разложено по полочкам, как в идеальной шахте. Хочешь играть удобнее, красивее и интереснее? Ты точно по адресу. MINEHUB — твой личный хаб для Minecraft без лишнего копания.</p>
        </div>
      </section>
      <section className={`py-[60px]`} style={{ backgroundColor: whiteDarker }}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-[600px]">
              <h2 className={`mb-[20px] text-[40px] font-bold flex items-center gap-[16px]`} style={{ color: darkBlue }}>
                <Image priority width={40} src={sectionIconServers} alt="" />
                <span>Серверы</span>
              </h2>
              <p className={`mb-[40px] text-[20px]`} style={{ color: darkBlue }}>Ходить по серверам в поисках нормального — как копать алмазы без удачи III. Но не переживай, мы уже всё выкопали за тебя! Здесь собраны топовые Minecraft-серверы: выживание, мини-игры, техно, анархия и даже те, где тебя не забанят за то, что ты носишь скин херобрина. Ищи по версии, режиму и онлайну — и забудь, как звучит фраза "куда бы зайти...".</p>
              <Link href={'/servers'}>
                <Button size={'lg'} className="text-[20px] px-[50px] py-[25px]" variant={'default'}>
                  Куда бы зайти
                </Button>
              </Link>
            </div>
            <div className="w-[500px]">
              <Image priority src={sectionImgServers} alt="" />
            </div>
          </div>
        </div>
      </section>
      <section className={`py-[60px]`} style={{ backgroundColor: whiteDarker }}>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="w-[500px]">
              <Image priority src={sectionImgTexture} alt="" />
            </div>
            <div className="w-[600px]">
              <h2 className={`mb-[20px] text-[40px] font-bold flex items-center gap-[16px]`} style={{ color: darkBlue }}>
                <Image priority width={40} src={sectionIconTexture} alt="" />
                <span>Текстур-паки</span>
              </h2>
              <p className={`mb-[40px] text-[20px]`} style={{ color: darkBlue }}>Надоела пиксельная жизнь? Освежи свой Minecraft новым прикидом! В этом разделе ты найдёшь текстурпаки на любой вкус: от реалистичных до таких, где крипера можно перепутать с подушкой. HD, 16x, 32x, ванильный стиль или полный визуальный разнос — всё уже тут, просто выбери и наслаждайся. Minecraft — тот же, а выглядит будто RTX с завода.</p>
              <Link href={'/servers'}>
                <Button size={'lg'} className="text-[20px] px-[50px] py-[25px]" variant={'default'}>
                  Выбрать текстуру
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
