#!/bin/bash

ctl=/usr/bin/pactl
lockfile=~/scripts/misc/volume-lockfile
iconDir="$HOME/.icons"

while [ -f "$lockfile" ]; do
    sleep 0.1;
done
touch "$lockfile"


getIcon() {
    status=$("$ctl" get-sink-volume @DEFAULT_SINK@)
    vol=$(echo "$status" | cut -d ' ' -f6 | tr -d '%')
    mute=$("$ctl" get-sink-mute @DEFAULT_SINK@ | cut -d ' ' -f2)
    #echo $vol

    if [ "$mute" == "yes" ]; then
        echo "$iconDir/volume_off.svg"
    else
        if [ "$vol" -eq 0 ]; then
            echo "$iconDir/volume_off.svg"
        elif [ "$vol" -lt 33 ]; then
            echo "$iconDir/volume_mute.svg"
        elif [ "$vol" -lt 66 ]; then
            echo "$iconDir/volume_down.svg"
        else
            echo "$iconDir/volume_up.svg"
        fi
    fi
}



val="5"
#orig=$("$ctl" current | tr -d '%')
orig=$("$ctl" get-sink-volume @DEFAULT_SINK@ | tr -d '[:space:]' | cut -d '/'
-f2 | tr -d '%')
subinc=5


# stackoverflow magic 
# https://askubuntu.com/questions/1266769/find-device-description-of-default-sink-from-pulseaudio
currDevice=$(pacmd list-sinks | grep -Pzo "\* index(.*\n)*" | sed \$d | grep -e "device.description" | cut -f2 -d\")
currDevice=$(pacmd list-sinks | grep "device.description" | sed -e 's/^[[:space:]]*//' | cut -d '"' -f2)


if [ "$1" == "mute" ]; then
    opt="mute"
    "$ctl" set-sink-mute @DEFAULT_SINK@ toggle
else
    if [ "$1" == "inc" ]; then
        opt="+"
        if [ "$2" != '' ]; then val="$2"; fi

    elif [ "$1" == "dec" ]; then
        opt="-"
        if [ "$2" != '' ]; then val="$2"; fi

    fi

    "$ctl" set-sink-volume @DEFAULT_SINK@ "$opt""$val"% && killall -SIGUSR1 i3status
fi

#current=$("$ctl" current | tr -d '%')
current=$("$ctl" get-sink-volume @DEFAULT_SINK@ | tr -d '[:space:]' | cut -d '/' -f2 | tr -d '%')
#mute=$("$ctl" full-status | cut -d ' ' -f2)
mute=$("$ctl" get-sink-mute @DEFAULT_SINK@ | cut -d ' ' -f2)
ntext="Volume at $current%"

if [ "$mute" == "yes" ]; then
    ntext="Volume muted"
fi

dunstify -i "$(getIcon)" -u normal -h string:x-dunst-stack-tag:volume -a "$currDevice" "$ntext" -h "int:value:${current}"

rm "$lockfile"
