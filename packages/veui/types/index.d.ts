import * as Components from './components'

export declare const Accordion: Components.Accordion
export declare const Alert: Components.Alert
export declare const AlertBox: Components.AlertBox
export declare const Anchor: Components.Anchor
export declare const Autocomplete: Components.Autocomplete
export declare const Badge: Components.Badge
export declare const Breadcrumb: Components.Breadcrumb
export declare const BreadcrumbItem: Components.BreadcrumbItem
export declare const Button: Components.Button
export declare const ButtonGroup: Components.ButtonGroup
export declare const Calendar: Components.Calendar
export declare const Carousel: Components.Carousel
export declare const Cascader: Components.Cascader
export declare const CheckButtonGroup: Components.CheckButtonGroup
export declare const Checkbox: Components.Checkbox
export declare const CheckboxGroup: Components.CheckboxGroup
export declare const Collapse: Components.Collapse
export declare const Column: Components.Column
export declare const ConfigProvider: Components.ConfigProvider
export declare const ConfirmBox: Components.ConfirmBox
export declare const DatePicker: Components.DatePicker
export declare const Dialog: Components.Dialog
export declare const Drawer: Components.Drawer
export declare const Dropdown: Components.Dropdown
export declare const Field: Components.Field
export declare const Fieldset: Components.Fieldset
export declare const FilterPanel: Components.FilterPanel
export declare const Form: Components.Form
export declare const GridColumn: Components.GridColumn
export declare const GridContainer: Components.GridContainer
export declare const GridRow: Components.GridRow
export declare const Icon: Components.Icon
export declare const Input: Components.Input
export declare const InputGroup: Components.InputGroup
export declare const Label: Components.Label
export declare const Lightbox: Components.Lightbox
export declare const Link: Components.Link
export declare const Loading: Components.Loading
export declare const Menu: Components.Menu
export declare const Message: Components.Message
export declare const Nav: Components.Nav
export declare const NumberInput: Components.NumberInput
export declare const Option: Components.Option
export declare const OptionGroup: Components.OptionGroup
export declare const Overlay: Components.Overlay
export declare const Pagination: Components.Pagination
export declare const Popover: Components.Popover
export declare const Progress: Components.Progress
export declare const PromptBox: Components.PromptBox
export declare const Radio: Components.Radio
export declare const RadioButtonGroup: Components.RadioButtonGroup
export declare const RadioGroup: Components.RadioGroup
export declare const SearchBox: Components.SearchBox
export declare const Select: Components.Select
export declare const Slider: Components.Slider
export declare const Span: Components.Span
export declare const Stack: Components.Stack
export declare const Steps: Components.Steps
export declare const Switch: Components.Switch
export declare const Tab: Components.Tab
export declare const Table: Components.Table
export declare const Tabs: Components.Tabs
export declare const Tag: Components.Tag
export declare const Textarea: Components.Textarea
export declare const TimePicker: Components.TimePicker
export declare const Toast: Components.Toast
export declare const ToastList: Components.ToastList
export declare const Tooltip: Components.Tooltip
export declare const Transfer: Components.Transfer
export declare const Tree: Components.Tree
export declare const Uploader: Components.Uploader
export declare const Content: Components.Content
export declare const Footer: Components.Footer
export declare const Header: Components.Header
export declare const Layout: Components.Layout
export declare const Sidebar: Components.Sidebar
export declare const Sidenav: Components.Sidenav
export declare const Empty: Components.Empty

interface DialogManagerOptions {
  overlayClass: string | Array<string> | Record<string, boolean>
  ok(): Promise<void>
}

interface Types {
  type: 'success' | 'warning' | 'info' | 'error'
}

declare class AlertDialogManager {
  show(
    content: string,
    title: string,
    options?: DialogManagerOptions & Types
  ): Promise<void>

  success(
    content: string,
    title: string,
    options?: DialogManagerOptions
  ): Promise<void>

  info(
    content: string,
    title: string,
    options?: DialogManagerOptions
  ): Promise<void>

  error(
    content: string,
    title: string,
    options?: DialogManagerOptions
  ): Promise<void>

  warn(
    content: string,
    title: string,
    options?: DialogManagerOptions
  ): Promise<void>
}

declare class ConfirmDialogManager<R> {
  show(
    content: string,
    title: string,
    options?: DialogManagerOptions & {
      cancel(): Promise<void>
    }
  ): Promise<R>
}

interface ToastOptions {
  duration?: number
}

declare class ToastDialogManager {
  show(message: string, options?: ToastOptions & Types): void

  success(message: string, options?: ToastOptions): void

  info(message: string, options?: ToastOptions): void

  error(message: string, options?: ToastOptions): void

  warn(message: string, options?: ToastOptions): void
}

export declare const alert: AlertDialogManager
export declare const confirm: ConfirmDialogManager<boolean>
export declare const prompt: ConfirmDialogManager<string | null>
export declare const toast: ToastDialogManager

interface RuleOptions {
  validate(value: any, ruleValue: any): boolean
  message: string
  priority: number
}

declare class RuleManager {
  addRule(name: string, ruleOptions: RuleOptions): void
}

export declare const validation: RuleManager

declare class ConfigManager {
  defaults(key: string, val: any, ns?: string): void
  // eslint-disable-next-line no-dupe-class-members
  defaults(value: Record<string, any>, ns?: string): void
}

export declare const config: ConfigManager
export declare const ui: ConfigManager
