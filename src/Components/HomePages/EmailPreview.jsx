import React from 'react'
import tsIcon from '../../assets/Images/Home/Tss.png'
import EmailPreviewImg from '../../assets/Images/Home/EmailPreviewImg.png'
   
function Tab({ label, active = false }) {
  return (
    <div
      className={[
        'flex items-center gap-2 px-3 py-1.5 rounded-md border flex-shrink-0',
        active
          ? 'text-sky-400 border-none'
          : 'text-neutral-400 border-none'
      ].join(' ')}
      role="tab"
      aria-selected={active}
    >
      <img src={tsIcon} alt="TypeScript" className="h-4 w-4 object-contain" />
      <span className={active ? 'text-sky-400' : 'text-neutral-300/80'}>
        {label}
      </span>
    </div>
  )
}

export default function EmailPreview() {
  return (
    <div className="px-4 py-8 bg-black min-h-screen flex justify-center items-center text-neutral-100">
      <div className="w-full max-w-[520px]">

      
        <div className="rounded-[28px] border border-neutral-800 bg-neutral-950 
                        shadow-[0_20px_80px_rgba(0,0,0,0.6)] overflow-hidden">

           
          <div className="px-4 pt-4">
            <div className="flex items-center gap-3">
              
              <div className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
            </div>
          </div>

           
          <div className="mt-3 border-t border-neutral-800 border-b">
            <div className="flex items-center gap-2 px-3 py-2 overflow-x-auto whitespace-nowrap">
              <Tab label="user-welcome.tsx" active />
              <Tab label="reset-password.tsx" />
              <Tab label="user-invite.tsx" />
              <Tab label="weekly-digest.tsx" />
            </div> 
          </div>

           
          <div className="p-6">
            <div className="relative rounded-[24px] w-full max-w-[460px] mx-auto bg-neutral-950">

               
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 top-0 h-44 
                           rounded-t-[24px] no-scrollbar   
                           bg-[radial-gradient(ellipse_at_top,_rgba(56,189,248,0.12),transparent_60%)]" 
              />

              
              <img
                src={EmailPreviewImg}
                alt="EmailPreviewImg"
                className="h-16 w-16 object-contain mx-auto"
              />
 
              <h1 className="text-center text-2xl sm:text-3xl leading-tight font-medium mt-3">
                Welcome to <span className="font-bold">ACME</span>,<br className="sm:hidden" /> user!
              </h1>

               
              <div className="mx-auto mt-8 max-w-[36rem] text-neutral-300 text-left">
                <p className="mb-6">Hello Steve,</p>
                <p className="leading-7 text-[15px]">
                  We&apos;re excited to have you onboard at <span className="font-semibold">ACME</span>.
                  We hope you enjoy your journey with us. If you have any questions or need
                  assistance, feel free to reach out.
                </p>
              </div>

               
              <div className="mt-8 flex justify-center">
                <button
                  className="rounded-xl px-5 py-2 text-base font-semibold text-white
                             bg-sky-500 hover:bg-sky-600 active:bg-sky-700
                             focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/60
                             transition"
                  type="button"
                >
                  Get Started
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
