cd && sudo apt update -y && sudo apt upgrade -y

sudo apt install -y autoconf gcc make pkg-config libpam0g-dev libcairo2-dev libfontconfig1-dev libxcb-composite0-dev libev-dev libx11-xcb-dev libxcb-xkb-dev libxcb-xinerama0-dev libxcb-randr0-dev libxcb-image0-dev libxcb-util0-dev libxcb-xrm-dev libxkbcommon-dev libxkbcommon-x11-dev libjpeg-dev libxext-dev libxcb1-dev libxcb-damage0-dev libxcb-dpms0-dev libxcb-xfixes0-dev libxcb-shape0-dev libxcb-render-util0-dev libxcb-render0-dev libxcb-randr0-dev libxcb-composite0-dev libxcb-image0-dev libxcb-present-dev libxcb-glx0-dev libpixman-1-dev libdbus-1-dev libconfig-dev libgl-dev libegl-dev libpcre2-dev libevdev-dev uthash-dev libev-dev libx11-xcb-dev meson apt-transport-https ca-certificates gnupg-agent gnupg lsb-release software-properties-common git bluetooth

sudo apt autoremove -y && sudo apt install -y wget curl sl feh thefuck neofetch vim htop bat vlc tree zip openssh-client nmap netcat hashcat hashid python3-dev python3-pip  python3-setuptools unzip polybar rofi picom libreoffice flameshot gimp kitty jupyter-notebook imagemagick light virtualbox-ext-pack blueman

# i3 Last version (for gaps)
# see https://i3wm.org/docs/repositories.html
# cd && /usr/lib/apt/apt-helper download-file https://debian.sur5r.net/i3/pool/main/s/sur5r-keyring/sur5r-keyring_2022.02.17_all.deb keyring.deb SHA256:52053550c4ecb4e97c48900c61b2df4ec50728249d054190e8a0925addb12fc6
# sudo apt install ./keyring.deb && rm ./keyring.deb
# echo "deb http://debian.sur5r.net/i3/ $(grep '^DISTRIB_CODENAME=' /etc/lsb-release | cut -f2 -d=) universe" | sudo tee /etc/apt/sources.list.d/sur5r-i3.list
# sudo apt update
# sudo apt install i3

mkdir /tmp/build
cd /tmp/build
git clone https://www.github.com/Airblader/i3 i3-gaps
cd i3-gaps
git checkout gaps && git pull
sudo apt install meson asciidoc
sudo apt install libstartup-notification0-dev libxcb-cursor-dev
libxcb-keysyms1-dev libxcb-icccm4-dev libyajl-dev librust-pangocairo-dev
meson -Ddocs=true -Dmans=true ../build
meson compile -C ../build
sudo meson install -C ../build

# i3color
cd && git clone https://github.com/Raymo111/i3lock-color.git
cd i3lock-color
./build.sh
./install-i3lock-color.sh && cd

# betterlockscreen
cd && wget https://raw.githubusercontent.com/betterlockscreen/betterlockscreen/main/install.sh -O - -q | sudo bash -s system

# Dunst
cd && git clone https://github.com/dunst-project/dunst.git
cd dunst
make
sudo make install && cd

# Spotify
curl -sS https://download.spotify.com/debian/pubkey_7A3A762FAFD4A51F.gpg | sudo gpg --dearmor --yes -o /etc/apt/trusted.gpg.d/spotify.gpg
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list
sudo apt-get update && sudo apt-get install spotify-client

# Spotify Polybar
sudo apt install playerctl
cd && git clone https://github.com/Jvanrhijn/polybar-spotify.git

# Openvpn3
cd && curl -fsSL https://swupdate.openvpn.net/repos/openvpn-repo-pkg-key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/openvpn-repo-pkg-keyring.gpg
curl -fsSL https://swupdate.openvpn.net/community/openvpn3/repos/openvpn3-$DISTRO.list >/etc/apt/sources.list.d/openvpn3.list

# Docker
cd && sudo mkdir -m 0755 -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Google-Chrome
cd && wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
sudo apt install -y ./google-chrome-stable_current_amd64.deb
rm ./google-chrome-stable_current_amd64.deb

sudo apt update && sudo apt install -y spotify-client openvpn3 docker-ce docker-ce-cli containerd.io docker-buildx-plugin docker-compose-plugin

# Docker
sudo groupadd docker && sudo usermod -aG docker $USER

# Oh my zsh
sudo apt install zsh -y
cd && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

sudo apt upgrade -y
