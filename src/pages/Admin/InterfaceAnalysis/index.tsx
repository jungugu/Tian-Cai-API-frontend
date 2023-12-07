import {
  PageContainer,
} from '@ant-design/pro-components';
import '@umijs/max';

import EChartsReact from "echarts-for-react";
import {useState} from "react/index";
import {useEffect} from "react";
import {
  listOrderInfoUsingGET,
  listRegisterUserInWeekUsingGET,
  listTopInvokeInterfaceInfoUsingGET
} from "@/services/tianCaiAPI/analysisInterfaceController";
import {Card, Col, Row} from "antd";


const InterfaceAnalysis: React.FC = () => {
  const [data,setdata] = useState<API.InterfaceInfo[]>([]);
  const [loading,setloading] = useState(true);


  const [dataUser,setdataUser] = useState<API.AnalysisUserRegisterVO[]>([]);
  const [loadingUser,setloadingUser] = useState(true);

  const [dataOrder,setdataOrder] = useState<API.AnalysisOrderVO[]>([]);
  const [loadingOrder,setloadingOrder] = useState(true);

  useEffect(() => {
    try {
      listTopInvokeInterfaceInfoUsingGET().then(res => {
        if (res.data) {
          setdata(res.data);
          setloading(false);
        }
      })
      listRegisterUserInWeekUsingGET().then(res => {
        if (res.data) {
          setdataUser(res.data);
          setloadingUser(false);
        }
      })
      listOrderInfoUsingGET().then(res => {
        if (res.data) {
          setdataOrder(res.data);
          setloadingOrder(false);
        }
      })
    } catch (e: any) {
    }
  },[])

  const chartData = data.map(item => {
    return{
      value: item.totalInvokes,
      name: item.name
    }
  })

  const interfaceName = data.map(item => {
    return{
      value: item.name
    }
  })

  const interfaceInvokeNum = data.map(item => {
    return{
      value: item.totalInvokes
    }
  })

  const DataName = dataUser.map(item => {
    return{
      value: item.date,
    }
  })
  const DataValue = dataUser.map(item => {
    return{
      value: item.registerUserNum,
    }
  })

  const orderDataName = dataOrder.map(item => {
    return{
      value: item.date,
    }
  })
  const orderDataValue = dataOrder.map(item => {
    return{
      value: item.total,
    }
  })

  const option = {
    title: {
      text: '调用次数最多的接口TOP5',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: '调用次数',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: chartData,
      }
    ]
  };

  const optionUser = {
    title: {
      text: '近一周的用户注册',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: DataName,
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data:  DataValue,
        type: 'line'
      }
    ]
  };

  const optionColumn = {
    title: {
      text: '接口调用次数',
      left: 'center'
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      }
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true
    },
    xAxis: {
      type: 'value',
      boundaryGap: [0, 0.01]
    },
    yAxis: {
      type: 'category',
      data: interfaceName,
    },
    series: [
      {
        name: '调用次数',
        type: 'bar',
        data: interfaceInvokeNum
      },
    ]
  };


  const optionOrder = {
    title: {
      text: '用户充值金额',
      left: 'center'
    },
    xAxis: {
      type: 'category',
      data: orderDataName
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: orderDataValue,
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  };
  return (
    <Row gutter={[8, 8]}>
      <Col span={12}>
        <Card>
          <EChartsReact loadingOption={loading} option={option}/>
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <EChartsReact loadingOption={loadingUser} option={optionUser}/>
        </Card>
      </Col>
      <Col span={12}>
        <Card>
          <EChartsReact loadingOption={loading} option={optionColumn}/>
        </Card>
      </Col>
      <Col span={12} >
        <Card>
          <EChartsReact loadingOption={loadingOrder} option={optionOrder}/>
        </Card>
      </Col>
    </Row>
  );
};
export default InterfaceAnalysis;
