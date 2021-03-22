import FooterLink from '@components/footerLink';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-start p-4">
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
      <p className="text-gray-100 pt-6 text-sm">
        <span role="img" aria-label="copyright">
          ©️
        </span>{' '}
        PR1SM - 2021
      </p>
    </footer>
  );
}
