<template>
    <span v-if="favorite" @click="onFavorite" style="color: #FF7E56;" class="detail-hover-span">
      <i class="es-icon es-icon-favorite mrs" style="color: #FF7E56;"></i>{{ 'site.favorited'|trans }}
    </span>
    <span v-else @click="onFavorite" class="detail-hover-span">
      <i class="es-icon es-icon-favoriteoutline mrs"></i>{{ 'site.favorite'|trans }}
    </span>
</template>

<script>
    import axios from "axios";
    import Api from 'common/api';

    export default {
        data() {
            return {
                favorite: false
            }
        },
        props: {
            isFavorite: {
                type: Boolean,
                required: true
            },

            targetType: {
                type: String,
                required: true
            },

            targetId: {
                type: Number,
                required: true

            },
        },
        watch: {
            isFavorite: {
                handler(newValue, oldValue) {
                    this.favorite = newValue;
                },
                deep: true,
                immediate: true,
            }
        },
        methods: {
            addFavorite(targetType, targetId) {
                Api.favorite.favorite({
                    data: {
                        'targetType': targetType,
                        'targetId': targetId,
                    }
                }).then((res) => {
                    this.favorite = true;
                });
            },

            removeFavorite(targetType, targetId) {
                Api.favorite.unfavorite({
                    data: {
                        'targetType': targetType,
                        'targetId': targetId,
                    }
                }).then((res) => {
                    this.favorite = false;
                });
            },

            onFavorite() {
                if (this.favorite) {
                    this.removeFavorite(this.targetType, this.targetId);
                } else {
                    this.addFavorite(this.targetType, this.targetId);
                }
            },
        }
    }
</script>