import Emitter from 'es6-event-emitter';
import swfobject from 'es-swfobject';

class BalloonCloudVideoPlayer extends Emitter {

    constructor(options) {
        super();
        this.options = options;
        this.setup();
        this.palyer = '';
    }

    setup() {
        let element = this.options.element;
        // todo delete, to move into the cloud player
        if (!swfobject.hasFlashPlayerVersion('11') && !/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)) {
            $(element).css({'background-color': '#313131', 'position': 'relative'});
            $(element).html('<p style="color:#fff; position: absolute; top: 49%; left:0; right:0">您的浏览器未装Flash播放器或版本太低，请先安装或升级Flash播放器。请点击<a target="_blank" href="http://www.adobe.com/go/getflashplayer">这里</a>安装最新版本</p>');
            return;
        }

        var self = this;

        var extConfig = {};

        if (self.options.watermark != '') {
            extConfig = $.extend(extConfig, {
                watermark: {
                    file: self.options.watermark,
                    pos: 'top.right',//top.right, bottom.right, bottom.left, center
                    xrepeat: 0,
                    opacity: 0.5
                }
            });
        }

        if (self.options.fingerprint != '') {
            extConfig = $.extend(extConfig, {
                fingerprint: {
                    html: self.options.fingerprint,
                    duration: self.options.fingerprintTime
                }
            })
        }

        if (self.options.timelimit != '') {
            extConfig = $.extend(extConfig, {
                pluck: {
                    timelimit: self.options.timelimit,
                    text: "免费试看结束，购买后可完整观看",
                    display: true
                }
            })
        }

        if (self.options.enablePlaybackRates != false && self.isBrowserSupportPlaybackRates()) {
            extConfig = $.extend(extConfig, {
                playbackRates: {
                    enable: true,
                    source: 'hls',
                    src: self.options.url
                }
            });
        }

        if (self.options.controlBar != '') {
            extConfig = $.extend(extConfig, {
                controlBar: self.options.controlBar
            });
        }

        if (self.options.statsInfo != '') {
            var statsInfo = self.options.statsInfo;
            extConfig = $.extend(extConfig, {
                statsInfo: {
                    accesskey: statsInfo.accesskey,
                    globalId: statsInfo.globalId,
                    userId: statsInfo.userId,
                    userName: statsInfo.userName
                }
            });
        }
        var player = new VideoPlayerSDK($.extend({
            id: $(self.options.element).attr('id'),
            disableControlBar: self.options.disableControlBar,
            disableProgressBar: self.options.disableProgressBar,
            playlist: self.options.url,
            remeberLastPos: self.options.remeberLastPos,
            videoHeaderLength: self.options.videoHeaderLength
        }, extConfig));

        player.on('ready', function (e) {
            self.trigger("ready", e);
        });

        player.on("timeupdate", function (e) {
            self.trigger("timechange", e);
        });

        player.on("ended", function (e) {
            self.trigger("ended", e);
        });

        player.on("playing", function (e) {
            self.trigger("playing", e);
        });

        player.on("paused", function (e) {
            self.trigger("paused", e);
        });

        player.on("answered", function (e) {
            var data = e.data;
            data['answer'] = data.result.choosed;
            data['type'] = self.convertQuestionType(data.type, 'cloud');
            self.trigger("answered", data);
        });

       this.palyer = player;

        window.BalloonPlayer = this;
    }

    play() {
        this.player.play();
    }

    pause() {
        this.player.pause();
    }

    getCurrentTime() {
        return this.player.getCurrentTime();
    }

    setCurrentTime(time) {
        this.player.setCurrentTime(time);
        return this;
    }

    replay() {
        this.setCurrentTime(0).play();
        return this;
    }

    isPlaying() {
        if (this.player && this.player.paused) {
            return !this.player.paused();
        }
        return false;
    }

    setQuestions(questions) {

        if (questions.length > 0) {

            for (var i in questions) {
                questions[i]['type'] = this.convertQuestionType(questions[i].type, 'es');
            }

            var exam = {
                popupExam: {
                    config: {
                        "mode": "middle"
                    },
                    questions: questions
                }
            }

            this.player.setExams(exam);
        }

        return this;
    }

    isBrowserSupportPlaybackRates() {
        var nUserAgent = navigator.userAgent.toLowerCase();
        // IE不支持，低版本(47以下)的chrome不支持
        var isIE = nUserAgent.indexOf('msie') > 0;
        var isIE11 = nUserAgent.indexOf('trident') > 0 && nUserAgent.indexOf('rv') > 0;
        var isChrome = nUserAgent.indexOf('chrome') > 0;
        var isSafari = nUserAgent.indexOf('safari') > 0 && !isChrome;

        if (isIE11 || isIE || isSafari) {
            return false;
        }
        if (isChrome) {
            var matched = navigator.userAgent.match(/Chrome\/(\d{0,3})/i);
            if (matched && matched[1] < 47) {
                return false;
            }
        }

        return true;
    }

    convertQuestionType(source, from) {
        var map = [ //云播放器弹题的字段值跟ES不太一致
            {
                es: 'choice',
                cloud: 'multiChoice'
            }, {
                es: 'single_choice',
                cloud: 'choice'
            }, {
                es: 'determine',
                cloud: 'judge'
            }, {
                es: 'fill',
                cloud: 'completion'
            }, {
                es: 'uncertain_choice',
                cloud: 'uncertainChoice'
            }
        ];

        for (var i in map) {
            if (from == 'es' && map[i]['es'] == source) {
                return map[i]['cloud'];
            }
            if (from == 'cloud' && map[i]['cloud'] == source) {
                return map[i]['es'];
            }
        }

        return source;
    }

}

export  default  BalloonCloudVideoPlayer;