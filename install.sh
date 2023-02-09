#!/bin/bash
############################
# This script creates symlinks from the home directory to any desired dotfiles in ~/dotfiles
############################

########## Variables

# dotfiles directory
sourcedir=~/dotfiles/files

# old dotfiles backup directory
olddir=~/dotfiles/dotfiles_old

# list of files/folders to symlink in homedir
files=".bashrc .gitconfig .profile .vimrc .zshrc"
dirs=".config/i3 .config/kitty .config/dunst .config/picom .config/polybar"
dirs_root="scripts .icons"

##########

# create dotfiles_old in homedir
if [ ! -d $olddir ]; then
    echo -n "Creating $olddir for backup of any existing dotfiles in ~ ..."
    # mkdir -p $olddir
    mkdir $olddir
    echo "done"
fi

# move any existing dotfiles in homedir to $olddir directory, then create
# symlinks from the homedir to any files in the $sourcedir directory
createLink(){
    local loop="$1"
    local target="$2"

    for d in $loop; do
        if [ -f ~/$d ] || [ -d ~/$d ]; then
            echo "# Saving $target/$d to $olddir"
            mv ~/$d $olddir/
        fi
        echo "Creating symlink to $d in home directory."
        ln -s $target/$d ~/$d
        echo "done"
    done
}


#createLink "$dirs_root" $sourcedir/..
#createLink "$dirs" $sourcedir
createLink "$files" $sourcedir
