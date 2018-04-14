<template>
    <div class="instruction-w">
        <my-header></my-header>

        <left-menu></left-menu>
        <div class="instruction-content-w menu-content-w">
            <h1>考生须知</h1>
            <p>
                1．考生可在本网站或直接到考点报名。
            </p>
            <p>
                2．考生报名时，须提供本人的有效身份证件号（身份证、台湾居民往来大陆通行证、港澳居民身份证和护照）。
            </p>
            <p>
                3．考生报名时，必须保证其所提交的数据信息内容真实、准确；其图像信息的采集标准按NCRE信息采集标准规定执行，没提供照片信息的考生不得参加考试，未进行考试报名缴费的考生不得进行考试。
            </p>
            <p>
                4．考生（或委托人）通过本通用考试系统完成网上报名信息填报确认后，视同其报名信息经过本人核准认同，不得修改。如所报考点另有要求考生以纸质形式确认时，考生须按要求签字确认。所有考生签字确认材料，考点须妥善保管半年，不得损毁。
            </p>
            <p>
                5．如果在校生报名时发现因所属学校原因或其他信息有误导致无法按本人意愿报考时，请与现学籍所在学校的管理部门联系，并告知具体情况。
            </p>
        </div>

    </div>
</template>

<script>
    import MyHeader from '@/components/header'

    import LeftMenu from '@/components/leftMenu'

    export default {
        name: '',
        components: {LeftMenu, MyHeader},
        props: [],
        data() {
            return {
                isCollapse: false,

                instruction: {}
            }
        },
        methods: {}
    }
</script>
<style lang="less">
    .instruction-w {
        .instruction-content-w {
            display: inline-block;
            width: 75%;
            vertical-align: top;

            h1 {
                font-size: 28px;
                font-weight: normal;
                margin-bottom: 30px;
            }
            p {
                line-height: 30px;
                margin-bottom: 15px;
            }
        }

    }
</style>
