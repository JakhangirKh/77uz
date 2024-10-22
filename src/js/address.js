export const addressTemplate = () => {
    return `
        <div id="address-modal" class="absolute left-1/2 -translate-x-2/4 
        shadow-lg rounded-lg 
          flex-col w-[379px] h-[620px] bg-white">
          <div class="px-6   py-6">
        <h4 class="text-2xl font-bold">Введите адресс</h4>
                <p class="font-medium text-sm text-[#8E9297]">
                  Войти в систему чтобы торговать в системе
                </p>
                <form action="" class="mt-7">
                  <label for="uname" class="font-medium text-sm">Адресс</label>
                  <input
                  type="text"
                  required
                  placeholder="Введите свой адрес"
                  name="address"
                  class="p-3 w-[338px] border text-sm font-normal rounded-lg mt-2 hover:bg-white duration-[0.3s] hover:border-[#388FF3] bg-slate-200"
                />
                <a href:"https://yandex.uz/maps" class:"w-[338px] h-[338px] rounded-lg"></a>
                </form>
                <button id="apply" onclick="onApply()"
                class="rounded-lg bg-[#388FF3] p-3 w-[338px] text-white text-base font-semibold hover:bg-white hover:text-[#388FF3] hover:border-[#388FF3] border duration-[0.3s]"
                >
                      Подать заявку
                    </button>
                    </div></div>`
                  }