cd && sudo apt update -y && sudo apt upgrade -y

sudo apt install -y \
    autoconf gcc make pkg-config \
    libpam0g-dev libcairo2-dev libfontconfig1-dev \
    libxcb-composite0-dev libev-dev libx11-xcb-dev libxcb-xkb-dev \
    libxcb-xinerama0-dev libxcb-randr0-dev libxcb-image0-dev libxcb-util0-dev \
    libxcb-xrm-dev libxkbcommon-dev libxkbcommon-x11-dev libjpeg-dev \
    libxext-dev libxcb1-dev libxcb-damage0-dev libxcb-dpms0-dev \
    libxcb-xfixes0-dev libxcb-shape0-dev libxcb-render-util0-dev \
    libxcb-render0-dev libxcb-randr0-dev libxcb-composite0-dev \
    libxcb-image0-dev libxcb-present-dev libxcb-glx0-dev libpixman-1-dev \
    libdbus-1-dev libconfig-dev libgl-dev libegl-dev libpcre2-dev \
    libevdev-dev uthash-dev libev-dev libx11-xcb-dev \
    meson\
    apt-transport-https \
    ca-certificates \
    gnupg-agent \
    gnupg \
    lsb-release \
    software-properties-common \
    git \

# i3color
cd && git clone https://github.com/Raymo111/i3lock-color.git
cd i3lock-color
./build.sh
./install-i3lock-color.sh && cd

sudo apt install -y \
    wget \
    curl \
    neofetch \
    vim \
    zsh \
    htop \
    bat \
    vlc \
    tree \
    zip \
    openssh-client \
    nmap \
    netcat \
    hashcat \
    hashid \
    python3-dev \
    python3-pip \
    python3-setuptools \
    unzip \
    polybar \
    rofi \
    picom \
    libreoffice \
    flameshot \
    gimp \
    kitty \
    jupyter-notebook \
    imagemagick \
    betterlockscreen \

pip3 install thefuck --user

# Dunst
cd && git clone https://github.com/dunst-project/dunst.git
cd dunst
make
sudo make install && cd

# Oh my zsh
cd && sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"

git clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting

git clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions

# VsCode
curl https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor > packages.microsoft.gpg
sudo install -o root -g root -m 644 packages.microsoft.gpg /usr/share/keyrings/
sudo sh -c 'echo "deb [arch=amd64 signed-by=/usr/share/keyrings/packages.microsoft.gpg] https://packages.microsoft.com/repos/vscode stable main" > /etc/apt/sources.list.d/vscode.list'

# Spotify
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 5E3C45D7B312C643
echo "deb http://repository.spotify.com stable non-free" | sudo tee /etc/apt/sources.list.d/spotify.list

# Insomnia
echo "deb [trusted=yes arch=amd64] https://download.konghq.com/insomnia-ubuntu/ default all" | sudo tee -a /etc/apt/sources.list.d/insomnia.list

# Openvpn3
cd && curl -fsSL https://swupdate.openvpn.net/repos/openvpn-repo-pkg-key.pub | gpg --dearmor > /etc/apt/trusted.gpg.d/openvpn-repo-pkg-keyring.gpg
curl -fsSL https://swupdate.openvpn.net/community/openvpn3/repos/openvpn3-$DISTRO.list >/etc/apt/sources.list.d/openvpn3.list

# Docker
cd && curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt update -y
sudo apt install -y code \
    spotify-client \
    insomnia \
    openvpn3 \
    docker-ce

# Docker
# sudo usermod -aG docker ${USER}
# su - ${USER}
# groups
