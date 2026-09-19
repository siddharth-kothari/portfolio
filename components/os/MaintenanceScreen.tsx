import { site } from "@/data/site";
import { Wallpaper } from "./Wallpaper";

export function MaintenanceScreen() {
  return (
    <div className="relative h-dvh overflow-hidden text-neutral-900 dark:text-white">
      <Wallpaper />
      <div className="absolute inset-0 bg-black/25 dark:bg-black/45" />

      <p className="absolute inset-x-0 top-8 text-center text-[13px] font-medium tracking-wide text-white/90">
        {site.name}
      </p>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6">
        <div
          aria-hidden
          className="grid h-24 w-24 place-items-center rounded-full bg-white/90 font-serif text-5xl leading-none text-neutral-900 shadow-[0_8px_30px_rgba(0,0,0,0.28)] dark:bg-white/85"
        >
          {site.firstName.charAt(0)}
        </div>
        <h1 className="mt-6 font-serif text-3xl tracking-tight sm:text-4xl">Updating</h1>
        <p className="mt-2 max-w-sm text-center text-sm leading-relaxed text-white/85">
          A system update is in progress. The desktop will be back shortly.
        </p>
        <div
          className="mt-8 h-1 w-44 shrink-0 overflow-hidden rounded-full bg-white/20"
          role="progressbar"
          aria-label="Updating"
          aria-valuetext="In progress"
        >
          <div className="maintenance-bar-fill h-1 w-2/5 rounded-full bg-white/90" />
        </div>
      </div>

      <a
        href={`mailto:${site.email}`}
        className="absolute inset-x-0 bottom-10 text-center text-sm text-white/75 underline-offset-4 hover:underline"
      >
        {site.email}
      </a>
    </div>
  );
}
