#User configuration
source ~/.bash_profile
#export PATH="/Users/zhengong/.npm-global/bin:$PATH"
export PATH=$PATH:$(npm bin -g)


# >>> conda initialize >>>
# !! Contents within this block are managed by 'conda init' !!
__conda_setup="$('/Users/zhengong/opt/anaconda3/bin/conda' 'shell.zsh' 'hook' 2> /dev/null)"
if [ $? -eq 0 ]; then
    eval "$__conda_setup"
else
    if [ -f "/Users/zhengong/opt/anaconda3/etc/profile.d/conda.sh" ]; then
        . "/Users/zhengong/opt/anaconda3/etc/profile.d/conda.sh"
    else
        export PATH="/Users/zhengong/opt/anaconda3/bin:$PATH"
    fi
fi
unset __conda_setup
# <<< conda initialize <<<


export NVM_DIR="/Users/zhengong/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
