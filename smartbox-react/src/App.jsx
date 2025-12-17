import React from "react";

const bgUrl = (url) => ({ backgroundImage: `url("${url}")` });

export default function App() {
  return (
    <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-[#f5f5f0] px-4 sm:px-10 py-4 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3 text-[#181811]">
            <div className="size-8 bg-primary rounded-full flex items-center justify-center text-black">
              <span className="material-symbols-outlined text-xl">inventory_2</span>
            </div>
            <h2 className="text-[#181811] text-xl font-bold leading-tight tracking-tight">SmartBox</h2>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a className="text-[#181811] text-sm font-medium hover:text-opacity-70 transition-colors" href="#como-funciona">Como Funciona</a>
            <a className="text-[#181811] text-sm font-medium hover:text-opacity-70 transition-colors" href="#beneficios">Benefícios</a>
            <a className="text-[#181811] text-sm font-medium hover:text-opacity-70 transition-colors" href="#localizacao">Unidades</a>
            <a className="text-[#181811] text-sm font-medium hover:text-opacity-70 transition-colors" href="#contato">Contato</a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden sm:flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-6 bg-primary text-[#181811] text-sm font-bold shadow-sm hover:shadow-md transition-shadow">
              <span className="truncate">Cotar Agora</span>
            </button>
            <button className="md:hidden p-2 text-[#181811]" type="button" aria-label="Abrir menu">
              <span className="material-symbols-outlined">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <div className="relative w-full px-4 sm:px-10 py-12 lg:py-24 flex justify-center overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/4" />
        <div className="max-w-7xl w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          <div className="flex flex-col gap-8 lg:w-1/2 z-10">
            <div className="flex flex-col gap-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 w-fit">
                <span className="flex h-2 w-2 rounded-full bg-green-500" />
                <span className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Novo em São Paulo</span>
              </div>

              <h1 className="text-[#181811] dark:text-white text-5xl sm:text-6xl font-black leading-[1.1] tracking-[-0.033em]">
                Liberte Espaço na Sua Vida.{" "}
                <span className="bg-primary px-2 text-[#181811] inline-block -skew-x-3 transform">
                  Pague pelo Uso.
                </span>
              </h1>

              <p className="text-gray-600 dark:text-gray-300 text-lg sm:text-xl font-normal leading-relaxed max-w-lg">
                Armazenamento inteligente e seguro cobrado por m². A solução perfeita para guardar móveis, estoques ou documentos sem pagar por espaços vazios.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex items-center justify-center rounded-full h-14 px-8 bg-primary hover:bg-[#ebe700] text-[#181811] text-base font-bold shadow-lg shadow-primary/30 transition-all hover:-translate-y-1" type="button">
                <span className="material-symbols-outlined mr-2">chat</span>
                Orçar no WhatsApp
              </button>
              <button className="flex items-center justify-center rounded-full h-14 px-8 bg-white border border-gray-200 text-[#181811] text-base font-bold hover:bg-gray-50 transition-colors" type="button">
                Entenda os Planos
              </button>
            </div>

            <div className="flex items-center gap-4 mt-4 text-sm font-medium text-gray-500">
              <div className="flex -space-x-2">
                <div
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white bg-cover bg-center"
                  data-alt="Portrait of a smiling customer"
                  style={bgUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuBQUITES9b6lUHLUd9qjjrqkXI-zvRgdtbaSWvX810L6itacheodHL_FYeZS9dphD5accMqYHBEggJxJzAJ9n0P0slH5ukrRemo4EBYxvm0Uc9JwDQybbFiIARl5x0tJqVG_PeV6YIh3Jn9_K6brTGXWU4aBgGFpos4keCMcK3K9jBHMoyN_DrbTmO398LhmIhnokCougDgSVewJMpZwwx55AxHfvoKWpjJ5rsLc0EDATRwvoLgLzGnoR3xBIXGu6tUf2rDvy-Isn9n")}
                />
                <div
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white bg-cover bg-center"
                  data-alt="Portrait of a smiling customer"
                  style={bgUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuDtlUcmab5QiyXXhX42TtSpqbZuws_Q4X1J3IeoViYuQNxFjg3lBNZpScBOzji1dYEjTXIYa9vJaUH_gRz8fjT-jNxR0EJzevcIeEzOeJDtHO78n6tnSSM7jiLq7QmdQFn46Di_A_4pV6TCV6fFliSU8kI0K9OybFZJNaHwJnz3ckmYSQ5o8AQN9H9Tj8GFCPA3sZz2Y0lSbiWq0D_ISwP98MT75fC2bfAQL9Yc7iGWiHN-3TgFpMRkDse-cYB49Kjcn_g0g0paozCv")}
                />
                <div
                  className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white bg-cover bg-center"
                  data-alt="Portrait of a smiling customer"
                  style={bgUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAvppau9yu5oGXidlO5xxO5AZ5GqaOcIIXV7IP7_nO0MqEZNHPXJjQT6HbNCWfNDDEJ3Q6qYzxx3A9eaXCwmm8xBtda9hdO_1v_QCLYEIpxm97MNUH14L29nXLdLLYIEtVAg-Ha0_bTgqhUoIKFYHoqb5MA5KqA3PRFFhPkZk8ThzxoisgmNpkKj1eyFzzb9kIH34mgvfyqLsyC08T1V1Q1qPbAxa2SiiyOHVeaLw4RETWS1dozHcscWSnWh-Z11NGTyzc1HS3g7Aoq")}
                />
              </div>
              <p>Mais de 5.000 clientes confiam</p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full relative group">
            <div className="relative w-full aspect-square sm:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent z-10" />
              <img
                alt="Clean and modern storage facility with organized boxes"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                data-alt="Clean and organized modern warehouse interior with boxes"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAJkzK4hgyw2yr_e0NhqBwmqVWlVS9dqJoJkNK5hG1xRbsqQROQOO0xmpaDVHcI3xoMKJaprvwkn1EK6gNKA8WuaKikLe4GQ2b767j2UEMrl7feoPQScbcaYm_CHz4mG7KAqvcWfdjNA_UYf1QlP4e5Vbt7_p0iJsopFsMKu6hXNXsPJ_UXqADMUGNNLJwpKws8ZaT50t34jYlTdn_W2LkNsvxcN6-vavjTcZhslWhUPGEi_3kSnr-XLFsETS1RxWvwHIlhu7qDlEzO"
              />
              <div className="absolute bottom-6 left-6 right-6 sm:right-auto sm:w-64 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl z-20 animate-fade-in-up">
                <div className="flex items-start gap-3">
                  <div className="bg-green-100 p-2 rounded-full text-green-600">
                    <span className="material-symbols-outlined">verified_user</span>
                  </div>
                  <div>
                    <p className="font-bold text-[#181811]">Segurança Total</p>
                    <p className="text-xs text-gray-500">Monitoramento 24h e seguro incluso em todos os planos.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary rounded-full flex items-center justify-center shadow-lg hidden sm:flex">
              <span className="material-symbols-outlined text-4xl text-[#181811]">package_2</span>
            </div>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="bg-white py-12 border-y border-[#f5f5f0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center text-center p-6 bg-background-light rounded-2xl border border-transparent hover:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-4xl text-[#181811] mb-3">groups</span>
              <p className="text-[#181811] text-3xl font-black leading-tight">5.000+</p>
              <p className="text-gray-500 text-sm font-medium mt-1">Clientes Satisfeitos</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background-light rounded-2xl border border-transparent hover:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-4xl text-[#181811] mb-3">warehouse</span>
              <p className="text-[#181811] text-3xl font-black leading-tight">12.000m²</p>
              <p className="text-gray-500 text-sm font-medium mt-1">Área Disponível</p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-background-light rounded-2xl border border-transparent hover:border-primary/50 transition-all">
              <span className="material-symbols-outlined text-4xl text-[#181811] mb-3">location_on</span>
              <p className="text-[#181811] text-3xl font-black leading-tight">8 Locais</p>
              <p className="text-gray-500 text-sm font-medium mt-1">Unidades Estratégicas</p>
            </div>
          </div>
        </div>
      </div>

      {/* COMO FUNCIONA */}
      <div className="py-20 px-4 sm:px-10 bg-background-light dark:bg-background-dark" id="como-funciona">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/2 space-y-8">
              <div>
                <h2 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-2">Simples e Eficiente</h2>
                <h3 className="text-3xl md:text-4xl font-bold text-[#181811] dark:text-white leading-tight mb-4">
                  Como funciona o armazenamento por m²?
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Esqueça aluguéis caros de salas inteiras que você não usa totalmente. Com a SmartBox, você paga apenas pelo espaço exato que seus itens ocupam.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <span className="material-symbols-outlined">calculate</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#181811] dark:text-white">1. Calcule seu espaço</h4>
                    <p className="text-gray-500 text-sm mt-1">Use nossa calculadora ou fale com um especialista para estimar o volume.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <span className="material-symbols-outlined">local_shipping</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#181811] dark:text-white">2. Coletamos tudo</h4>
                    <p className="text-gray-500 text-sm mt-1">Buscamos seus itens na sua porta, embalamos e etiquetamos com segurança.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shrink-0 shadow-sm text-primary">
                    <span className="material-symbols-outlined">dashboard</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#181811] dark:text-white">3. Gerencie online</h4>
                    <p className="text-gray-500 text-sm mt-1">Acesse seu inventário digital e solicite a devolução de qualquer item com um clique.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 w-full">
              <div className="bg-white dark:bg-[#1a190b] rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-10 pointer-events-none">
                  <span className="material-symbols-outlined text-[200px]">grid_4x4</span>
                </div>

                <h4 className="text-xl font-bold mb-6 text-center">O que cabe em 1m²?</h4>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-background-light dark:bg-gray-800 p-4 rounded-xl flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300">inventory_2</span>
                    <span className="text-sm font-semibold text-center">8 Caixas Grandes</span>
                  </div>
                  <div className="bg-background-light dark:bg-gray-800 p-4 rounded-xl flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300">chair</span>
                    <span className="text-sm font-semibold text-center">1 Poltrona + Itens</span>
                  </div>
                  <div className="bg-background-light dark:bg-gray-800 p-4 rounded-xl flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300">pedal_bike</span>
                    <span className="text-sm font-semibold text-center">2 Bicicletas</span>
                  </div>
                  <div className="bg-background-light dark:bg-gray-800 p-4 rounded-xl flex flex-col items-center gap-2">
                    <span className="material-symbols-outlined text-3xl text-gray-700 dark:text-gray-300">checkroom</span>
                    <span className="text-sm font-semibold text-center">Arara de Roupas</span>
                  </div>
                </div>

                <button className="w-full py-4 rounded-xl bg-primary text-[#181811] font-bold hover:bg-[#ebe700] transition-colors" type="button">
                  Calcular meu Espaço
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BENEFICIOS */}
      <div className="py-20 px-4 sm:px-10 bg-white dark:bg-background-dark" id="beneficios">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-black text-[#181811] dark:text-white mb-4">Por que escolher a SmartBox?</h2>
            <p className="text-gray-500 text-lg">Tecnologia e segurança para garantir que seus pertences estejam sempre protegidos e acessíveis.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group p-8 rounded-[2rem] bg-background-light dark:bg-[#2a2912] hover:bg-white dark:hover:bg-[#333115] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">lock</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#181811] dark:text-white">Segurança Nível Bancário</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Monitoramento 24/7 com câmeras HD, controle de acesso biométrico e alarmes conectados à polícia.
              </p>
            </div>

            <div className="group p-8 rounded-[2rem] bg-background-light dark:bg-[#2a2912] hover:bg-white dark:hover:bg-[#333115] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">thermostat</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#181811] dark:text-white">Climatização Controlada</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Ambientes com controle de temperatura e umidade para preservar documentos, obras de arte e móveis.
              </p>
            </div>

            <div className="group p-8 rounded-[2rem] bg-background-light dark:bg-[#2a2912] hover:bg-white dark:hover:bg-[#333115] border border-transparent hover:border-gray-200 dark:hover:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-3xl">smartphone</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#181811] dark:text-white">Inventário Digital</h3>
              <p className="text-gray-500 dark:text-gray-400 leading-relaxed">
                Controle tudo pelo app. Fotos de cada item armazenado e solicitação de retirada com apenas um toque.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTATO */}
      <div className="py-20 px-4 sm:px-10 bg-background-light dark:bg-background-dark" id="contato">
        <div className="max-w-5xl mx-auto bg-[#181811] dark:bg-black rounded-[2.5rem] overflow-hidden shadow-2xl relative">
          <div
            className="absolute top-0 right-0 w-full h-full opacity-10"
            style={{ backgroundImage: "radial-gradient(#f9f506 1px, transparent 1px)", backgroundSize: "24px 24px" }}
          />
          <div className="flex flex-col md:flex-row relative z-10">
            <div className="p-10 md:p-14 md:w-1/2 flex flex-col justify-center">
              <h2 className="text-white text-3xl md:text-4xl font-black mb-6 leading-tight">
                Pronto para liberar espaço?
              </h2>
              <p className="text-gray-400 text-lg mb-8">
                Receba um orçamento personalizado em menos de 5 minutos. Sem compromisso.
              </p>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Contratos flexíveis mensais</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Seguro incluso</span>
                </div>
                <div className="flex items-center gap-3 text-white">
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span>Primeiro mês com 50% OFF</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 bg-white dark:bg-[#1f1e16] p-10 md:p-14">
              <form className="flex flex-col gap-5">
                <div>
                  <label className="block text-sm font-bold text-[#181811] dark:text-white mb-2">Seu Nome</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="Ex: João Silva"
                    type="text"
                  />
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#181811] dark:text-white mb-2">Tipo de Itens</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all">
                    <option>Móveis Residenciais</option>
                    <option>Documentos / Arquivos</option>
                    <option>Estoque Comercial</option>
                    <option>Outros</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-bold text-[#181811] dark:text-white mb-2">WhatsApp / Telefone</label>
                  <input
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:border-primary focus:ring-2 focus:ring-primary/50 outline-none transition-all"
                    placeholder="(11) 99999-9999"
                    type="tel"
                  />
                </div>

                <button
                  className="mt-2 w-full py-4 rounded-full bg-primary hover:bg-[#ebe700] text-[#181811] font-bold text-lg shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
                  type="button"
                >
                  Solicitar Cotação Grátis
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* DEPOIMENTOS */}
      <div className="py-20 px-4 sm:px-10 bg-white border-t border-[#f5f5f0] dark:bg-background-dark">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-12 text-[#181811] dark:text-white">O que dizem nossos clientes</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-background-light dark:bg-[#2a2912] p-8 rounded-3xl relative">
              <span className="material-symbols-outlined text-primary text-5xl absolute -top-4 -left-2 opacity-50">format_quote</span>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic pt-2">
                &quot;A melhor solução que encontrei durante minha reforma. Paguei exatamente pelo espaço que usei e a equipe foi super cuidadosa com meus móveis.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                  data-alt="Portrait of Ana Souza"
                  style={bgUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuAyGQDE23D9-b2JRqBrOtHHt4w1K_yUjg2iA3NYcX4JQlRrJTP403BvwOKZvUM9TQkd2BXy6l1aB4F-ZkFSMltZN9DIH7Xjc48Lv9_Z0gMORV5aNI4O9ZFlRgbb10AtDSswS6lP_R_Xuh-AWo4RePsSAc5y6kKRL45Tk_-TlQwBMwdawn00GBTLNGim285R4f13iO3SdwmrnVpO8DfaOLw8UwO6Kfnq2Da8C_uMvfY1JcguDEITwpoHHV8-JWZXqT-Jf7gWqy9b-ljE")}
                />
                <div>
                  <p className="font-bold text-sm text-[#181811] dark:text-white">Ana Souza</p>
                  <p className="text-xs text-gray-500">São Paulo, SP</p>
                </div>
              </div>
            </div>

            <div className="bg-background-light dark:bg-[#2a2912] p-8 rounded-3xl relative">
              <span className="material-symbols-outlined text-primary text-5xl absolute -top-4 -left-2 opacity-50">format_quote</span>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic pt-2">
                &quot;Excelente para e-commerce. Uso como estoque flexível e adoro poder gerenciar tudo pelo app. O preço por m² vale muito a pena.&quot;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                  data-alt="Portrait of Carlos Mendez"
                  style={bgUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCHj7rEj990ZAhipe4HFYpppWmmqoVNbTX_vpJ9y0m6ksKEvlHF-YRX9CbmBZWhIXtvKTe7kdPpDcHClYeubFBnltt_sgpTYFLFkufgMOk_bpElbKdqELTVaJvVzw9aMmb5h6LB8jMd9uS0mrZ2OOpxZetv_ECi4Tb-aemojDzlqgkqtgxUybKPmf2WMw8Re2CpHjFIBnNvZJiDUN4F5sAU6Ljfo8DGP-xZ2TC4AVj3rxvpNLJFLe1BMmu4d9vWQLfu8hNAfjPPhmjc")}
                />
                <div>
                  <p className="font-bold text-sm text-[#181811] dark:text-white">Carlos Mendez</p>
                  <p className="text-xs text-gray-500">Curitiba, PR</p>
                </div>
              </div>
            </div>

            <div className="bg-background-light dark:bg-[#2a2912] p-8 rounded-3xl relative">
              <span className="material-symbols-outlined text-primary text-5xl absolute -top-4 -left-2 opacity-50">format_quote</span>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic pt-2">
                &quot;Prático e sem burocracia. O processo de cotação foi rápido e a coleta agendada funcionou perfeitamente. Recomendo!&quot;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-gray-300 bg-cover bg-center"
                  data-alt="Portrait of Mariana Lima"
                  style={bgUrl("https://lh3.googleusercontent.com/aida-public/AB6AXuCJPO2V6Tv_bHoBr9UkAVaGc8Ab4LOC5NY5vl7I48fzEpNoBsdd6aSm55yG2UWWs4qo3B27dL13PElblU885kXp55rv-WFes8PAOHlTflpgmud5xokMmIicBvpWI7zi3b-cJLxz1gffk1Z3T_0XXvQToBNioTMFs12pEUlxmtmisovboisbsPy1yes96wfgb6BhTn49hL5p1zFrfjcHt-pMf5R1l-5KzYjLAFnZO81U5vh0MHC9zU1ImY4-0XPNp_bgaEehT8WpEv7W")}
                />
                <div>
                  <p className="font-bold text-sm text-[#181811] dark:text-white">Mariana Lima</p>
                  <p className="text-xs text-gray-500">Rio de Janeiro, RJ</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <div className="py-20 px-4 sm:px-10 bg-background-light dark:bg-background-dark border-t border-[#f5f5f0]" id="faq">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-[#181811] dark:text-white mb-4">Perguntas Frequentes</h2>
            <p className="text-gray-500 text-lg">Tudo o que você precisa saber sobre o armazenamento inteligente.</p>
          </div>

          <div className="space-y-4">
            <details className="group bg-white dark:bg-[#2a2912] rounded-[2rem] p-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 open:shadow-lg [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                <span className="text-lg font-bold text-[#181811] dark:text-white">Como funciona o armazenamento por m²?</span>
                <span className="material-symbols-outlined text-gray-400 group-open:text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Diferente do self-storage tradicional onde você aluga um box inteiro (e paga pelo ar), na SmartBox você paga apenas pelo volume exato que seus itens ocupam. Nós medimos seus pertences e calculamos o espaço necessário, garantindo o melhor custo-benefício.
                </p>
              </div>
            </details>

            <details className="group bg-white dark:bg-[#2a2912] rounded-[2rem] p-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 open:shadow-lg [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                <span className="text-lg font-bold text-[#181811] dark:text-white">Meus itens estão seguros?</span>
                <span className="material-symbols-outlined text-gray-400 group-open:text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Segurança é nossa prioridade máxima. Nossas instalações contam com monitoramento por câmeras 24h, alarmes monitorados, controle de pragas e sistema de detecção de incêndio. Além disso, todos os contratos incluem seguro básico para seus bens.
                </p>
              </div>
            </details>

            <details className="group bg-white dark:bg-[#2a2912] rounded-[2rem] p-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 open:shadow-lg [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                <span className="text-lg font-bold text-[#181811] dark:text-white">Quais são os preços?</span>
                <span className="material-symbols-outlined text-gray-400 group-open:text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  Nossos planos são flexíveis e começam a partir de valores muito competitivos por m². O preço final depende do volume total armazenado. Oferecemos descontos progressivos para maiores volumes e períodos longos. Solicite uma cotação gratuita para um valor exato.
                </p>
              </div>
            </details>

            <details className="group bg-white dark:bg-[#2a2912] rounded-[2rem] p-1 border border-transparent hover:border-gray-200 dark:hover:border-gray-700 transition-all duration-300 open:shadow-lg [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                <span className="text-lg font-bold text-[#181811] dark:text-white">Como solicito uma cotação?</span>
                <span className="material-symbols-outlined text-gray-400 group-open:text-primary transition-transform duration-300 group-open:rotate-180">expand_more</span>
              </summary>
              <div className="px-6 pb-6 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  É muito simples! Você pode preencher o formulário na seção &quot;Contato&quot; desta página, nos enviar uma mensagem pelo WhatsApp ou ligar para nossa central. Em poucos minutos, nossa equipe fará uma estimativa baseada na sua lista de itens.
                </p>
              </div>
            </details>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-500 mb-4">Ainda tem dúvidas?</p>
            <a className="inline-flex items-center justify-center font-bold text-primary hover:text-[#ebe700] transition-colors border-b-2 border-primary hover:border-[#ebe700]" href="#contato">
              Falar com um especialista
            </a>
          </div>
        </div>
      </div>

      {/* LOCALIZACAO */}
      <div className="py-20 px-4 sm:px-10 bg-white dark:bg-background-dark border-t border-[#f5f5f0]" id="localizacao">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/3 space-y-8">
              <div>
                <h2 className="text-3xl font-black text-[#181811] dark:text-white mb-4">Nossa Localização</h2>
                <p className="text-gray-600 dark:text-gray-300 text-lg">
                  Visite nossa central de operações ou uma de nossas 8 unidades espalhadas estrategicamente pela cidade.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-background-light dark:bg-[#2a2912] flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#181811] dark:text-white">Unidade Central</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-background-light dark:bg-[#2a2912] flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined">schedule</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#181811] dark:text-white">Horário de Funcionamento</h4>
                    <p className="text-gray-500 text-sm mt-1">
                      Seg - Sex: 08:00 - 20:00<br />
                      Sáb: 09:00 - 14:00
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-background-light dark:bg-[#2a2912] flex items-center justify-center shrink-0 text-primary">
                    <span className="material-symbols-outlined">phone_in_talk</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#181811] dark:text-white">Central de Atendimento</h4>
                    <p className="text-gray-500 text-sm mt-1">(11) 99999-9999</p>
                  </div>
                </div>
              </div>

              <button className="flex items-center gap-2 text-[#181811] dark:text-white font-bold hover:text-primary transition-colors group" type="button">
                <span>Ver todas as unidades</span>
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </button>
            </div>

            <div className="lg:w-2/3 w-full h-[500px] rounded-[2rem] overflow-hidden shadow-2xl relative border-4 border-white dark:border-[#2a2912]">
              <iframe
                title="Mapa - SmartBox"
                allowFullScreen
                className="w-full h-full filter grayscale hover:grayscale-0 transition-all duration-700"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.098177309903!2d-46.65206302375382!3d-23.56491746172235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c8da0aa315%3A0xd59f9431f2c9776a!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1715000000000!5m2!1spt-BR!2sbr"
                style={{ border: 0 }}
                width="100%"
              />
              <div className="absolute bottom-6 left-6 bg-white dark:bg-[#181811] px-4 py-3 rounded-xl shadow-lg flex items-center gap-3">
                <span className="flex h-3 w-3 rounded-full bg-green-500 animate-pulse" />
                <p className="text-xs font-bold text-[#181811] dark:text-white">Unidade aberta agora</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer className="bg-white dark:bg-background-dark py-12 px-4 sm:px-10 border-t border-[#f5f5f0]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3 text-[#181811]">
              <div className="size-6 bg-primary rounded-full flex items-center justify-center text-black">
                <span className="material-symbols-outlined text-sm">inventory_2</span>
              </div>
              <h2 className="text-[#181811] dark:text-white text-lg font-bold">SmartBox</h2>
            </div>
            <p className="text-gray-500 text-sm max-w-xs">
              A solução moderna para quem precisa de espaço extra. Simples, seguro e sob medida.
            </p>
          </div>

          <div className="flex flex-wrap gap-8 text-sm font-medium text-gray-600 dark:text-gray-400">
            <a className="hover:text-primary transition-colors" href="#">Termos de Uso</a>
            <a className="hover:text-primary transition-colors" href="#">Política de Privacidade</a>
            <a className="hover:text-primary transition-colors" href="#">Ajuda</a>
            <a className="hover:text-primary transition-colors" href="#">Trabalhe Conosco</a>
          </div>

          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#181811] dark:text-white hover:bg-primary transition-colors" href="#" aria-label="Twitter">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg>
            </a>
            <a className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center text-[#181811] dark:text-white hover:bg-primary transition-colors" href="#" aria-label="Instagram">
              <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.072 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path></svg>
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-100 dark:border-gray-800 text-center text-xs text-gray-400">
          © 2024 SmartBox Armazenamento Inteligente S.A. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
