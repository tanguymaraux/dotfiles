# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# eval "$(starship init zsh)"

# Path to your oh-my-zsh installation.
export ZSH="/home/pilpur/.oh-my-zsh"

plugins=(sudo docker docker-compose gitfast ubuntu web-search thefuck
    copypath copybuffer dirhistory jsontools alias-finder colored-man-pages
    extract

    # other plugins...
    zsh-autosuggestions
    zsh-syntax-highlighting
)

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="nebirhos"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME=random will cause zsh to load
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment the following line to disable bi-weekly auto-update checks.
# DISABLE_AUTO_UPDATE="true"

# Uncomment the following line to automatically update without prompting.
DISABLE_UPDATE_PROMPT="true"

# Uncomment the following line to change how often to auto-update (in days).
# export UPDATE_ZSH_DAYS=13

# Uncomment the following line if pasting URLs and other text is messed up.
DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# Caution: this setting can cause issues with multiline prompts (zsh 5.7.1 and newer seem to work)
# See https://github.com/ohmyzsh/ohmyzsh/issues/5765
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.

# Shell history
HISTSIZE=10000
SAVEHIST=10000
setopt no_share_history     # Don't share history between separate shells
setopt hist_ignore_all_dups # Remove duplicates from the history
setopt inc_append_history   # Append to histfile as soon as command is entered

# Misc
setopt nobeep           # Disable terminal bell
setopt autocd           # cd if only a directory name was entered
setopt correct          # Prompt to correct misspelled commands
setopt hash_list_all    # Correct false reports of spelling errors

source $ZSH/oh-my-zsh.sh

# User configuration

# Cursor
#echo -e -n "\x1b[\x30 q" # changes to blinking block
#echo -e -n "\x1b[\x31 q" # changes to blinking block also
#echo -e -n "\x1b[\x32 q" # changes to steady block
#echo -e -n "\x1b[\x33 q" # changes to blinking underline
#echo -e -n "\x1b[\x34 q" # changes to steady underline
echo -e -n "\x1b[\x35 q" # changes to blinking bar
#echo -e -n "\x1b[\x36 q" # changes to steady bar


# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
alias sucepute="pkill"
alias gccc='gcc -Wextra -Wall -Werror -std=c99 -pedantic'
alias ls='ls --color=auto'
alias grep='grep --color -n'
alias gl='git log --decorate --oneline'
alias gs='git status'
alias gdb='gdb -q'
alias f='fuck'
alias bat='batcat'
alias cf='clang-format -i'
alias sl='sl -e'
[ "$TERM" = "xterm-kitty" ] && alias ssh="kitty +kitten ssh"
alias icat="kitty +kitten icat"

# You can use whatever you want as an alias, like for Mondays:
eval $(thefuck --alias FUCK)


export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
export PGDATA="$HOME/postgres_data"
export PGHOST="/tmp"
export PATH=/usr/share/go/bin:$PATH
export EDITOR='vim'
export GIT_EDITOR='vim'

# ssh-add -l > /dev/null
# if [ $? -gt 0 ]; then
#     eval $(ssh-agent)
#     ssh-add ~/.ssh/id_ed25519
# fi

eval `ssh-agent` > /dev/null
