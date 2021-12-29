<template>
  <div class="demo-form" style="margin: 0 20px;">
    <ss-form
      ref="demoForm"
      :model="demoForm"
      :rules="rules"
      label-width="80px"
      :label-position="labelPosition"
    >
      <ss-form-item label="课程名称" prop="name">
        <ss-input v-model="demoForm.name" size="s"></ss-input>
        <div slot="tips" class="form-tips">填写课程名称有利于快速查找</div>
      </ss-form-item>
      <ss-form-item label="课程简介" prop="desc">
        <ss-input v-model="demoForm.desc" type="textarea" autosize placeholder="请填写课程简介" class="course-textarea"></ss-input>
      </ss-form-item>
      <ss-form-item label="校区" prop="school">
        <ss-select v-model="demoForm.school" placeholder="请选择校区" class="course-textarea" clearable>
          <ss-option
            v-for="item in schoolOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </ss-option>
        </ss-select>
      </ss-form-item>
      <ss-form-item label="课程类型" prop="type">
        <ss-radio-group v-model="demoForm.type">
          <ss-radio :label="0">单节课</ss-radio>
          <ss-radio :label="1">系列课</ss-radio>
        </ss-radio-group>
      </ss-form-item>
      <ss-form-item label="学员资料" prop="info">
        <ss-checkbox-group v-model="demoForm.info">
          <ss-checkbox v-for="item in infoOptions" :label="item" :key="item">
            {{item}}
          </ss-checkbox>
        </ss-checkbox-group>
      </ss-form-item>
      <ss-form-item label="选择时间" prop="date">
        <ss-date-picker v-model="demoForm.date" type="date">
        </ss-date-picker>
      </ss-form-item>
      <ss-form-item>
        <ss-button @click="submitForm('demoForm')">立即创建</ss-button>
        <ss-button @click="validateName('demoForm')">验证课程名称</ss-button>
        <ss-button @click="resetForm('demoForm')">重置</ss-button>
      </ss-form-item>
    </ss-form>

    <div class="horizontal">
      <ss-form
        ref="demoForm"
        :model="demoForm"
        :rules="rules"
        :inline="true"
        label-width="90px"
        :label-position="labelPosition"
      >
        <ss-form-item label="行内" prop="name">
          <ss-input v-model="demoForm.name" size="s"></ss-input>
        </ss-form-item>
        <ss-form-item label="课程名称1" prop="name">
          <ss-input v-model="demoForm.name" size="s"></ss-input>
        </ss-form-item>
        <ss-form-item label="课程名称2" prop="name">
          <ss-input v-model="demoForm.name" size="s"></ss-input>
        </ss-form-item>
        <ss-form-item label="课程简介" prop="desc">
          <ss-input v-model="demoForm.desc"  placeholder="请填写课程简介" class="course-textarea"></ss-input>
        </ss-form-item>
        <ss-form-item label="校区" prop="school">
          <ss-select v-model="demoForm.school" placeholder="请选择校区" class="course-textarea" clearable>
            <ss-option
              v-for="item in schoolOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </ss-option>
          </ss-select>
        </ss-form-item>
      </ss-form>
    </div>
  </div>
</template>

<script>
  import SsForm from '@/components/form/form';
  import SsFormItem from '@/components/form/form-item';
  import SsInput from '@/components/input'
  import SsSelect from '@/components/select'
  import SsOption from '@/components/select/option'
  import SsButton from '@/components/button'
  import SsRadio from '@/components/radio'
  import SsRadioGroup from '@/components/radio/radioGroup'
  import SsCheckbox from '@/components/checkbox'
  import SsCheckboxGroup from '@/components/checkbox/checkbox-group'
  import SsDatePicker from '@/components/datePicker'
  export default {
    components: {
      SsForm,
      SsFormItem,
      SsButton,
      SsInput,
      SsSelect,
      SsOption,
      SsRadio,
      SsRadioGroup,
      SsCheckbox,
      SsCheckboxGroup,
      SsDatePicker
    },
    data() {
      return {
        dynamicValidateForm: {
          domains: [{
            value: ''
          }],
          email: ''
        },
        labelPosition: 'right',  //label位置：left、right、top
        demoForm: {
          name: '',
          desc: '',
          type: '',
          info: [],
          school: '',
          date:''
        },
        rules: {
          name: [
            { required: true, message: '请输入课程名称', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          desc: [
            { required: true, message: '请填写课程简介', trigger: 'blur' }
          ],
          school: [
            { required: true, message: '请选择校区', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请选择课程类型', trigger: 'change' }
          ],
          info: [
            { required: true, message: '请至少选择一个学员资料', trigger: 'change' }
          ],
          date: [
            { required: true, message: '请选择时间', trigger: 'change' }
          ],
        },
        infoOptions: [
          '真实姓名', '生日', '性别', '行业', '职位', '城市', '手机号码', '邮箱', '来源渠道', '年龄', '公司', '地址', '微信'
        ],
        schoolOptions: [{
            value: 'school1',
            label: '校区1'
          }, {
          value: 'school2',
          label: '校区2'
          }],

      }
    },
    methods: {
      submitForm(formName) {
        console.log('点击提交----', formName)
        this.$refs[formName].validate((valid, object) => {
          console.log('demo form校验结果：', valid, object)
          if (valid) {
            console.log('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      validateName(formName) {
        this.$refs[formName].validateField('name', (error) => {
          if (!error) {
            console.log('验证通过!');
          } else {
            console.log('验证失败');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
    }
  }
</script>
<style lang="scss" scoped>
  .demo-form{
    .ss-checkbox{
      margin-bottom: 16px;
    }
    .course-textarea{
      width: 216px;
    }
    .form-tips{
      color: #999;
      margin-top: 8px;
    }

    .horizontal{
      border-top: solid 1px #000;
      padding-top: 20px;
    }
  }


</style>
