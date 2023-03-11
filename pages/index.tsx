import {
  ChartIcon,
  PercentIcon,
  PointerIcon,
  TurnoverIcon,
  UserIcon,
} from "@/assets/icons";
import { withAppLayout } from "@/hocs";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <section className="mt-[50px] mb-[90px]">
        <div className="container">
          <div className="overflow-hidden rounded-[10px] bg-[#D3E7FB] bg-home-hero bg-cover bg-center bg-no-repeat shadow-[0px_8px_50px_rgba(210,232,254,0.4)]">
            <div className="px-[60px] py-[143px]">
              <h1 className="mb-[10px] max-w-[615px] text-[36px] font-semibold uppercase leading-[48px]">
                Мониторинг рыб и других водных животных
              </h1>
              <p className="mb-[50px] max-w-[595px]">
                Предназначена для своевременного сбора и обработки информации о
                добытой, закупленной, искусственно выращенной рыбе или других
                водных животных
              </p>
              <Link
                href="/#"
                className="grid w-fit grid-cols-[1fr_20px] items-center gap-x-[10px] rounded-[44px] bg-[#52A5FC] py-[15px] px-[30px] font-medium text-white shadow-[0px_8px_50px_rgba(82,165,252,0.7)]"
              >
                <span>Войти в систему</span>
                <UserIcon className="h-auto w-full" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="mb-[70px]">
        <div className="container">
          <div>
            <h2 className="mb-[15px] text-[36px] font-semibold uppercase leading-[48px]">
              О системе
            </h2>
            <div className="mb-[30px] flex flex-col gap-y-[30px]">
              <p>
                Информационная система мониторинга рыб и других водных животных
                предназначена для сбора и своевременной обработки информации о
                добытой, закупленной, искусственно выращенной рыбе или других
                водных животных, оптовой и розничной реализации рыб и других
                водных животных, экспорте и импорте в целях своевременного
                выявления и предотвращения реализации рыбы и других водных
                животных незаконного происхождения.
              </p>
              <p>
                Субъекты рыбного хозяйства в зависимости от вида пользования
                животным миром на регулярной основе осуществляют ввод данных о
                добытой, закупленной, искусственно выращенной рыбе или других
                водных животных, оптовой и розничной реализации рыб и других
                водных животных, экспорте и импорте в информационную систему
              </p>
            </div>
            <Link
              href="#instruction"
              className="grid w-fit grid-cols-[1fr_20px] items-center gap-x-[10px] rounded-[44px] bg-[#52A5FC] py-[15px] px-[30px] font-medium text-white"
            >
              <span>Скачать инструкции</span>
              <PointerIcon className="h-auto w-full" />
            </Link>
          </div>
        </div>
      </section>
      <section className="mb-[145px]">
        <div className="container">
          <div className="grid auto-rows-[294px] grid-cols-[repeat(3,minmax(0,381px))] items-center justify-between text-[18px] font-medium leading-[24px]">
            <div className="h-full rounded-[10px] bg-white px-[48px] pt-[37px] pb-[36px] shadow-[0px_8px_50px_rgb(210,232,254,0.4)]">
              <div className="flex items-center gap-x-[10px]">
                <p className="text-[120px] font-normal leading-[160px] text-[#5ABB5E]">
                  937
                </p>
                <ChartIcon className="h-[48px] w-auto text-[#52A5FC]" />
              </div>
              <p>
                Рост объемов вылова водных биоресурсов рыбаками за последние 5
                лет
              </p>
            </div>
            <div className="h-full rounded-[10px] bg-white px-[50px] pt-[37px] pb-[36px] shadow-[0px_8px_50px_rgb(210,232,254,0.4)]">
              <div className="flex items-center gap-x-[10px]">
                <p className="text-[120px] font-normal leading-[160px] text-[#5ABB5E]">
                  +47
                </p>
                <PercentIcon className="h-[48px] w-auto py-[8px] px-[12px] text-[#52A5FC]" />
              </div>
              <p>Рост инвестиций в основной капитал в 2021 году</p>
            </div>
            <div className="h-full rounded-[10px] bg-white px-[50px] pt-[37px] pb-[36px] shadow-[0px_8px_50px_rgb(210,232,254,0.4)]">
              <div className="flex items-center gap-x-[10px]">
                <p className="text-[120px] font-normal leading-[160px] text-[#5ABB5E]">
                  695
                </p>
                <TurnoverIcon className="h-[48px] w-auto text-[#52A5FC]" />
              </div>
              <p>Оборот организаций рыбной отрасли за 2021 год</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default withAppLayout(Home);
