import Alert from './alert'
import Badge from './badge'
import Button from './button'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'
import Dropdown from './dropdown'
import DropdownMenu from './dropdown-menu'
import DropdownItem from './dropdown-item'
import Input from './input'
import Message from './message'
import MessageBox from './message-box'
import Modal from './modal'
import Option from './option'
import Pagination from './pagination'
import Popover from './popover'
import Radio from './radio'
import RadioGroup from './radio-group'
import Select from './select'
import Steps from './steps'
import Step from './step'
import SimpleStep from './simple-step';
import Tabs from './tabs'
import TabPane from './tab-pane'
import Tag from './tag'
import ResourceSelect from './resource-select'
import Switch from './switch'
import TopTips from './top-tips'
import AssignModal from './assign-modal'
import AuthModal from './auth-modal'
import ShareModal from './share-modal'
import DefaultTips from './default-tips'
import NameReplacer from './name-replacer'
import PushSettingDialog from './push-setting-dialog'
import Tree from './tree'
import TreeLite from './tree-lite'
import Intro from './intro'
import baseLayout from './base-layout'
import PhoneInput from './phone-input'
import Table from './table'
import TableColumn from './table-column'
import SuperTable from './super-table';
import Dialog from './dialog'
import Rate from './rate'
import DatePicker from './date-picker'
import TimePicker from './time-picker'
import TimeSelect from './time-select'
import Form from './form'
import FormItem from './form-item'
import Loading from './loading'
import Tooltip from './tooltip'
import ElearningAssign from './elearning-assign'
import MaterialSelection from './material-selection'

const components = [
  Alert,
  Badge,
  Button,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Message,
  MessageBox,
  Modal,
  Option,
  Pagination,
  Popover,
  Radio,
  RadioGroup,
  Select,
  Steps,
  Step,
  SimpleStep,
  Tabs,
  TabPane,
  Tag,
  ResourceSelect,
  Switch,
  TopTips,
  AssignModal,
  AuthModal,
  ShareModal,
  DefaultTips,
  NameReplacer,
  PushSettingDialog,
  Tree,
  TreeLite,
  baseLayout,
  PhoneInput,
  Table,
  TableColumn,
  SuperTable,
  Dialog,
  Rate,
  DatePicker,
  TimePicker,
  TimeSelect,
  Form,
  FormItem,
  Loading,
  Tooltip,
  ElearningAssign,
  MaterialSelection
]

const install = (Vue) => {
  components.forEach((component) => {
    component.name && Vue.component(component.name, component)
  })

  Vue.prototype.$message = Message
}

export {
  install,
  Alert,
  Badge,
  Button,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Message,
  MessageBox,
  Modal,
  Option,
  Pagination,
  Popover,
  Radio,
  RadioGroup,
  Select,
  Steps,
  Step,
  SimpleStep,
  Tabs,
  TabPane,
  Tag,
  ResourceSelect,
  Switch,
  TopTips,
  AssignModal,
  AuthModal,
  ShareModal,
  DefaultTips,
  NameReplacer,
  PushSettingDialog,
  Tree,
  TreeLite,
  Intro,
  baseLayout,
  PhoneInput,
  Table,
  TableColumn,
  SuperTable,
  Dialog,
  Rate,
  DatePicker,
  TimePicker,
  TimeSelect,
  Form,
  FormItem,
  Loading,
  Tooltip,
  ElearningAssign,
  MaterialSelection
}

export default {
  install,
  Alert,
  Badge,
  Button,
  Checkbox,
  CheckboxGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Input,
  Message,
  MessageBox,
  Modal,
  Option,
  Pagination,
  Popover,
  Radio,
  RadioGroup,
  Select,
  Steps,
  Step,
  SimpleStep,
  Tabs,
  TabPane,
  Tag,
  ResourceSelect,
  Switch,
  TopTips,
  AssignModal,
  AuthModal,
  ShareModal,
  DefaultTips,
  NameReplacer,
  PushSettingDialog,
  Tree,
  TreeLite,
  Intro,
  baseLayout,
  PhoneInput,
  Table,
  TableColumn,
  SuperTable,
  Dialog,
  Rate,
  DatePicker,
  TimePicker,
  TimeSelect,
  Form,
  FormItem,
  Loading,
  Tooltip,
  ElearningAssign,
  MaterialSelection
}
