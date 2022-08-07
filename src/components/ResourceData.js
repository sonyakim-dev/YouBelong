import { Image } from "react-native";

var resourceData = [
  {
    key: "1",
    name: "Bill Of Rights",
    description:
      "The California Foster Youth Bill of Rights was written by the California Youth Connection, a statewide organization of youth in the foster care system. It outlines the personal rights and protections for individuals who are in out-of-home care.",
    image:
      "https://s3-alpha-sig.figma.com/img/28c2/8937/ffc7d818d27b34fdc1ef9b017e72a101?Expires=1660521600&Signature=JZ1jtKtmAWxUb0r8Jx5AU4mDXNaIqDShCvRApaoJhQDY17T7gUR~qcWiSvfGN0JJWtwImqjPd-NJci18-nRtD30JUJErrBkYbZimmDz9MNJ264qYH54RjssAu7wSdZqqugXhbbnN3K9rVAUzRoW2SaBpMtpdlX-JleIpZXMGBfHkDa0gMtLSvn0~7TwtfHOlz5a~dtjIeofL-F5Wyh1c~GhxChS68YVAmmCTceL4p4a40RMRtzkVFFA8fRad-sfYDe0UY44MZVDj0CtvgLlD9AdBOR-dY~CgOadC42-7HsMFehk~9c0BclKtpSaK-Doo0ppRa0AnVsUGddqBRY8r4w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    link: "https://www.cdss.ca.gov/cdssweb/entres/forms/English/pub396.pdf",
    category1: "Education",
    category2: "Legal",
    category3: "Awareness",
  },
  {
    key: "2",
    name: "KITS",
    description:
      "Kids In The Spotlight is a Black-led, Los Angeles County-based organization that helps foster youth heal and grow from trauma through the power of storytelling and filmmaking in the KITS flagship. In the script-to-Screen program, foster youth ages 12-22 write, cast, and star in their short films, telling their stories their way.",
    image:
      "https://s3-alpha-sig.figma.com/img/27b9/572c/83cc398378b2d69c824152bab1f7f8ff?Expires=1660521600&Signature=QrhFC8~1pP0WSYJM9WadioVtvezFQHyA4tlkmVytfC3yX4VzcAet77FBjuX8BA7~NGLKbLJjcHrF6xyLevlDvbJl8IAcYgdsa0rO6tbQBaA3xJR46LdoRKOvlvfQoL4MUw8nGVmq07Cgw6Ew65Xebs9LJ5vKLPGFkrImgt3QjPnfqGxAs7MkgWmwaBYqoNV3DL7h0EKj952OJwZcoSrhYf-OJisRiFbq9CRdw0ASXdvae8gELsLG8cpZO9NQnvtHxwQQUsDQhcAvj1SQKDcpWz5CSqbNk3CRdLSK3VUVGX7SHCvLUZBMBvOskabsflTe42LD5mldkeDHcOPVgzWRdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    link: "https://www.kitsinc.org/",
    category1: "Career",
    category2: "Education",
    category3: "Mentorship",
  },
  {
    key: "3",
    name: "CASA",
    description:
      "CASA of Los Angeles organizes the community to take action and advocate for children and families in LA County’s child welfare and juvenile justice systems. We train committed, consistent and caring adults who provide equitable access to resources and life-affirming connections.",
    image:
      "https://s3-alpha-sig.figma.com/img/59ae/908e/3ee4f3366d31d6bf4dbd2542dbea8628?Expires=1660521600&Signature=ISYoJxzvnH3tSSo8qhzvaksd0y5Wut9W5lAscMjJ3P-JkGlu8VneE56i2Cp6OubC3T-AofhuPw6ORz0j2hmHyfluIq6oHpbO390FaQUbLEbbXeKepMWeMAa2p~FYK5NyOwYSd5fDz89Bf3wynZ7C3cCO1bkhsXNU47mYYBhZrwWffObT8R8-27f8eorhw~dVtguO1I5zXfbN6Ru1a3VtYwMxPEoYdvj7N8Ng2IroaW-HZwFP-Kx3Ic6WaPZdpYLxv8MW9CWqp6a2pIFqTSzLkJwQLNSP4oI5HqGAmi55Pks4Kcj5w6Hkf-4sksUaH6pG3Ks1HwiG4FWgWWOfyNoEYQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    link: "https://casala.org/",
    category1: "Coaching",
    category2: "Outreach",
    category3: "Guardian",
  },
  {
    key: "4",
    name: "RTS",
    description:
      "Ready To Succeed believe that one of the most valuable resources they can provide is personal and career coaching. Scholars gain the knowledge, skills, and experience they need to make a smoother and faster transition from classroom to career. RTS leverages partners for other pressing real-world needs, including housing, mental health, clothing, transportation, and much more.",
    image:
      "https://readytosucceedla.org/wp-content/uploads/2020/01/Mobile_Logo-200.png",
    link: "https://readytosucceedla.org/",
    category1: "Wellness",
    category2: "Safety",
    category3: "Professional Dev...",
  },
  {
    key: "5",
    name: "iFoster",
    description:
      "iFoster collaborates with over 350  corporations, government agencies, and community organizations. This collaboration provides resources for foster care youth, from employment to access to mobile devices like smartphones.",
    link: "https://www.ifoster.org/",
    image:
      "https://s3-alpha-sig.figma.com/img/e309/f0f5/5968cf164c06febf5687391e20209a03?Expires=1660521600&Signature=hwJlAAmoJOnVptdMscH-869CZ~8z8EX0aso~lSlzhSQ3~LmY1isIkJmlcpcdiZsp6RBmbi7JzPKlg-J9u3o-8M1ySjEPGzqWozo0HL2Fr1M~VyCutgwAGFicBIjhNuNpma6JwhjiGMVaavpFBk0-ydrQWGoPCok7vxOViLRmRK6~rUPajAS3iCdD12G5kdyVOmv6PRKGnOxXQZfoKF9aMtCaKuXPCuk~IgEqdxucleDFpJM-jJamBrmCtWn-GvOb-pqRue44x4aFDCXVm6I0aChW13ny59lvczVPpJ8YVfsQzOHZscC1mmAFgt6Paxb996iylNsz-1dGTZ3hFRhFqA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    category1: "Services",
    category2: "Career",
    category3: "Technology",
  },
  {
    key: "6",
    name: "FosterClub",
    description:
      "FosterClub leads the efforts of young people in and from foster care to connect, educate, inspire, and feel represented. Peer support, locating resources, and learning their rights as youth in the foster system bring up their potential for success and contribute to a better life for their peers.",
    image: "https://www.fosterclub.com/sites/default/files/fc-logo-print.png",
    link: "https://www.fosterclub.com/",
    category1: "Access",
    category2: "Support",
    category3: "Education",
  },
];

module.exports = resourceData;
