# iOS 快捷指令：高湿度天气提醒

## 功能说明

此快捷指令实现以下功能：
- **执行时间**：周一到周五下午 5 点自动执行
- **检查条件**：检查当晚 24 点到第二天早上 5 点的湿度预报
- **提醒方式**：如果湿度达到 95% 以上，弹出静音通知（打开手机时可见）

## 设置步骤

### 第一步：创建快捷指令

1. 打开 iOS「快捷指令」应用
2. 点击右上角 `+` 创建新快捷指令
3. 按照下面的操作步骤添加动作

### 第二步：添加快捷指令动作

依次添加以下动作：

#### 1. 获取当前天气

```
动作：获取天气预报
位置：当前位置
预报类型：每小时天气预报
```

#### 2. 筛选夜间时段湿度

```
动作：重复每个项目
输入：每小时天气预报

  动作：获取「日期」的「小时」
  
  动作：如果
  条件：小时 < 6（即 0, 1, 2, 3, 4, 5 点）
  
    动作：获取重复项目的「湿度」
    
    动作：如果
    条件：湿度 >= 95
    
      动作：设置变量
      变量名：高湿度
      值：true
      
    结束如果
    
  结束如果
  
结束重复
```

#### 3. 显示静音通知

```
动作：如果
条件：变量「高湿度」等于 true

  动作：显示通知
  标题：高湿度提醒 💧
  内容：今晚到明早 5 点湿度将达到 95% 以上，请注意防潮！
  播放声音：关闭 ❌
  
结束如果
```

### 第三步：设置自动化触发

1. 打开「快捷指令」应用
2. 切换到「自动化」标签页
3. 点击右上角 `+` 创建个人自动化
4. 选择「特定时间」
5. 设置时间为 **下午 5:00**
6. 重复选择「每周」，勾选 **周一、周二、周三、周四、周五**
7. 点击「下一步」
8. 选择「运行快捷指令」
9. 选择刚才创建的「高湿度提醒」快捷指令
10. 关闭「运行前询问」开关
11. 点击「完成」

## 快捷指令代码（可导入）

你可以在快捷指令 App 中以 Apple Shortcut 格式导入以下配置：

> **条件代码说明**：
> - `WFCondition: 3` = 大于或等于 (>=)
> - `WFCondition: 4` = 等于 (==)
> - `WFCondition: 99` = 小于 (<)

```json
{
  "WFWorkflowName": "高湿度提醒",
  "WFWorkflowMinimumClientVersion": 900,
  "WFWorkflowMinimumClientVersionString": "900",
  "WFWorkflowIcon": {
    "WFWorkflowIconStartColor": 463140863,
    "WFWorkflowIconGlyphNumber": 59649
  },
  "WFWorkflowActions": [
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.weather.forecast",
      "WFWorkflowActionParameters": {
        "WFWeatherForecastType": "Hourly"
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.setvariable",
      "WFWorkflowActionParameters": {
        "WFVariableName": "高湿度",
        "WFInput": {
          "Value": false
        }
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.repeat.each",
      "WFWorkflowActionParameters": {
        "WFInput": {
          "Value": {
            "Type": "Variable",
            "VariableName": "Weather Conditions"
          }
        },
        "GroupingIdentifier": "repeat-each-1"
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.format.date",
      "WFWorkflowActionParameters": {
        "WFDate": {
          "Value": {
            "Type": "Variable",
            "VariableName": "Repeat Item",
            "Aggrandizements": [
              {
                "Type": "WFPropertyVariableAggrandizement",
                "PropertyName": "Date"
              }
            ]
          }
        },
        "WFDateFormat": "Custom",
        "WFDateFormatString": "H"
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.conditional",
      "WFWorkflowActionParameters": {
        "GroupingIdentifier": "if-hour-check",
        "WFControlFlowMode": 0,
        "WFCondition": 99,
        "WFNumberValue": 6,
        "WFInput": {
          "Type": "Variable",
          "VariableName": "Formatted Date"
        }
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.getvariable",
      "WFWorkflowActionParameters": {
        "WFVariable": {
          "Value": {
            "Type": "Variable",
            "VariableName": "Repeat Item",
            "Aggrandizements": [
              {
                "Type": "WFPropertyVariableAggrandizement",
                "PropertyName": "Humidity"
              }
            ]
          }
        }
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.conditional",
      "WFWorkflowActionParameters": {
        "GroupingIdentifier": "if-humidity-check",
        "WFControlFlowMode": 0,
        "WFCondition": 3,
        "WFNumberValue": 95,
        "WFInput": {
          "Type": "Variable",
          "VariableName": "Humidity"
        }
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.setvariable",
      "WFWorkflowActionParameters": {
        "WFVariableName": "高湿度",
        "WFInput": {
          "Value": true
        }
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.conditional",
      "WFWorkflowActionParameters": {
        "GroupingIdentifier": "if-humidity-check",
        "WFControlFlowMode": 2
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.conditional",
      "WFWorkflowActionParameters": {
        "GroupingIdentifier": "if-hour-check",
        "WFControlFlowMode": 2
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.repeat.each",
      "WFWorkflowActionParameters": {
        "GroupingIdentifier": "repeat-each-1",
        "WFControlFlowMode": 2
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.conditional",
      "WFWorkflowActionParameters": {
        "GroupingIdentifier": "if-notify",
        "WFControlFlowMode": 0,
        "WFCondition": 4,
        "WFConditionalActionString": "true",
        "WFInput": {
          "Type": "Variable",
          "VariableName": "高湿度"
        }
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.notification",
      "WFWorkflowActionParameters": {
        "WFNotificationActionTitle": "高湿度提醒 💧",
        "WFNotificationActionBody": "今晚到明早 5 点湿度将达到 95% 以上，请注意防潮！",
        "WFNotificationActionSound": false
      }
    },
    {
      "WFWorkflowActionIdentifier": "is.workflow.actions.conditional",
      "WFWorkflowActionParameters": {
        "GroupingIdentifier": "if-notify",
        "WFControlFlowMode": 2
      }
    }
  ]
}
```

## 注意事项

1. **定位权限**：确保「快捷指令」应用有访问位置的权限，以便获取当地天气
2. **通知权限**：确保「快捷指令」应用有发送通知的权限
3. **后台运行**：自动化需要在后台运行，确保不要关闭快捷指令的后台刷新
4. **天气数据**：天气预报数据来自 Apple Weather，确保地区支持

## 自定义选项

- **湿度阈值**：可以将 95% 修改为其他值
- **时间段**：可以调整检查的时间范围（目前是 0-5 点）
- **触发时间**：可以将下午 5 点修改为其他时间
- **通知内容**：可以自定义通知的标题和内容

## 故障排除

如果快捷指令没有正常运行：

1. 检查「设置」→「快捷指令」→「高级」中是否开启了「允许运行脚本」
2. 确保自动化设置正确且已启用
3. 手动运行一次快捷指令测试是否正常工作
4. 检查系统通知设置，确保快捷指令可以发送通知
