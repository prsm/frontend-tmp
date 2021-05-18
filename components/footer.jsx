import FooterLink from '@components/footerLink';

export default function Footer() {
  return (
    <footer className="p-4 sm:p-10 2 md:px-32">
      <div className="flex flex-col justify-start md:flex-row md:space-x-2 md:justify-center">
      <FooterLink
        link="https://www.youtube.com/channel/UCznZLeq9xjmx-uyVRvx8yug"
        src="/socials/youtube.svg"
        name="YouTube"
      />
      <FooterLink link="https://twitter.com/pr1sm_gg" src="/socials/twitter.svg" name="Twitter" />
      <FooterLink
        link="https://steamcommunity.com/groups/PR1SM"
        src="/socials/steam.svg"
        name="Steam"
      />
      <FooterLink
        link="https://www.instagram.com/pr1sm.gg/"
        src="/socials/instagram.svg"
        name="Instagram"
      />
      <FooterLink
        link="https://www.youtube.com/channel/UCznZLeq9xjmx-uyVRvx8yug"
        src="/socials/youtube.svg"
        name="YouTube"
      />
      <FooterLink link="https://www.twitch.tv/pr1sm_gg" src="/socials/twitch.svg" name="Twitch" />
      <FooterLink link="https://github.com/prsm" src="/socials/github.svg" name="GitHub" />
      </div>
      <p className="text-gray-100 pt-4 text-sm md:text-center">
        <span role="img" aria-label="copyright">
          ©️
        </span>{' '}
        PR1SM - 2021
      </p>
    </footer>
  );
}
