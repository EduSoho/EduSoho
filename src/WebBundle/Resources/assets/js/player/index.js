import  PlayerFactory from './player-factory';
import  EsMessager from '../../common/messenger';
import DurationStorage from '../../common/durationStorage';
class Show {

    constructor(element) {
        let container = $(element);
        this.htmlDom = $(element);
        this.userId = container.data("userId");
        this.userName = container.data("userName");
        this.fileId = container.data("fileId");
        this.fileGlobalId = container.data("fileGlobalId");

        this.courseId = container.data("courseId");
        this.lessonId = container.data("lessonId");
        this.timelimit = container.data('timelimit');

        this.playerType = container.data('player');
        this.fileType = container.data('fileType');
        this.url = container.data('url');
        this.videoHeaderLength = container.data('videoHeaderLength');
        this.enablePlaybackRates = container.data('enablePlaybackRates');
        this.watermark = container.data('watermark');
        this.accesskey = container.data('accessKey');
        this.fingerprint = container.data('fingerprint');
        this.fingerprintSrc = container.data('fingerprintSrc');
        this.fingerprintTime = container.data('fingerprintTime');
        this.balloonVideoPlayer = container.data('balloonVideoPlayer');
        this.markerUrl = container.data('markerurl');
        this.starttime = container.data('starttime');
        this.agentInWhiteList = container.data('agentInWhiteList');
        this.disableVolumeButton = container.data('disableVolumeButton');
        this.disablePlaybackButton = container.data('disablePlaybackButton');
        this.disableResolutionSwitcher = container.data('disableResolutionSwitcher');
        this.initView();
        this.initEvent();
    }

    initView() {
        let html = "";
        if (this.fileType == 'video') {
            if (this.playerType == 'local-video-player') {
                html += '<video id="lesson-player" style="width: 100%;height: 100%;" class="video-js vjs-default-skin" controls preload="auto"></video>';
            } else {
                html += '<div id="lesson-player" style="width: 100%;height: 100%;"></div>';
            }
        } else if (this.fileType == 'audio') {
            html += '<audio id="lesson-player" style="width: 100%;height: 100%;" class="video-js vjs-default-skin" controls preload="auto" poster="http://s.cn.bing.net/az/hprichbg/rb/MountScott_ZH-CN8412403132_1920x1080.jpg"></audio>';
        }
        this.htmlDom.html(html);
        this.htmlDom.show();
    }

    initPlayer() {
        return PlayerFactory.create(
            this.playerType,
            {
                element: '#lesson-player',
                url: this.url,
                mediaType:  this.fileType,
                fingerprint: this.fingerprint,
                fingerprintSrc: this.fingerprintSrc,
                fingerprintTime: this.fingerprintTime,
                watermark: this.watermark,
                starttime: this.starttime,
                agentInWhiteList: this.agentInWhiteList,
                timelimit: this.timelimit,
                enablePlaybackRates: this.enablePlaybackRates,
                controlBar: {
                    disableVolumeButton: this.disableVolumeButton,
                    disablePlaybackButton: this.disablePlaybackButton,
                    disableResolutionSwitcher: this.disableResolutionSwitcher
                },
                statsInfo: {
                    accesskey: this.accesskey,
                    globalId: this.fileGlobalId,
                    userId: this.userId,
                    userName: this.userName
                },
                videoHeaderLength: this.videoHeaderLength
            }
        );
    }

    initMesseger() {
        return new EsMessager({
            name: 'parent',
            project: 'PlayerProject',
            type: 'child'
        });
    }

    initEvent() {
        let player = this.initPlayer();
        let messenger = this.initMesseger();
        player.on("ready", function () {
            messenger.sendToParent("ready", {pause: true});
            if ( this.playerType == 'local-video-player') {
                var time = DurationStorage.get( this.userId, this.fileId);
                if (time > 0) {
                    player.setCurrentTime(DurationStorage.get( this.userId, this.fileId));
                }
                player.play();
            } else if ( this.playerType == 'balloon-cloud-video-player') {
                if (this.markerUrl) {
                    $.getJSON(this.markerUrl, function (questions) {
                        player.setQuestions(questions);
                    });
                }
            }
        });

        player.on('answered', function (data) {
            // @todo delete lessonId
            var finishUrl = '/course/lesson/marker/' + data.markerId + '/question_marker/' + data.id + '/finish';
            $.post(finishUrl, {
                "answer": data.answer,
                "type": data.type,
                "lessonId": lessonId
            }, function (result) {

            }, 'json');

        });

        player.on("timechange", function (data) {
            console.log('data---',data)
            messenger.sendToParent("timechange", {pause: true, currentTime: data.currentTime});
            if (this.playerType == 'local-video-player') {
                if (parseInt(player.getCurrentTime()) != parseInt(player.getDuration())) {
                    DurationStorage.set( this.userId, this.fileId, player.getCurrentTime());
                }
            }
        });

        player.on("paused", function () {
            messenger.sendToParent("paused", {pause: true});
        });

        player.on("playing", function () {
            console.log('playing')
            messenger.sendToParent("playing", {pause: false});
        });

        player.on("ended", function () {
            messenger.sendToParent("ended", {stop: true});
            if (this.playerType == 'local-video-player') {
                DurationStorage.del( this.userId, this.fileId);
            }
        });
    }




}
new Show('#lesson-video-content');