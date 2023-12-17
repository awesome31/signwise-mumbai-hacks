import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AnalysingScreen from '../modules/analysing/screens';
import AnalysisReportScreen from '../modules/analysis-report/screens';
import DetailedInsightsScreen from '../modules/detailed-insights/screens';
import HomeScreen from '../modules/home/screens';
import LanguageScreen from '../modules/language/screens';
import StartConversationScreen from '../modules/start-conversation/screens';
import UploadDocuments from '../modules/upload-documents/screens';
import {ROUTES} from './routes';

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={ROUTES.HOME}
          component={HomeScreen}
          options={{
            headerShown: false,
            title: 'Home',
          }}
        />
        <Stack.Screen
          name={ROUTES.UPLOAD_DOCUMENTS}
          component={UploadDocuments}
          options={{
            headerShown: true,
            title: 'Upload Documents',
          }}
        />
        <Stack.Screen
          name={ROUTES.ANALYSING}
          component={AnalysingScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name={ROUTES.ANALYSIS_REPORT}
          component={AnalysisReportScreen}
          options={{
            headerShown: true,
            title: 'Analysis Report',
          }}
        />
        <Stack.Screen
          name={ROUTES.DETAILED_INSIGHTS}
          component={DetailedInsightsScreen}
          options={{
            headerShown: true,
            title: 'Detailed Analysis',
          }}
          initialParams={{
            title:
              'Credit Card Agreement & Disclosure Statement by TIB The Independent BankersBank',
            natureOfDocument: 'Legal Agreement',
            adviceCategory: ['Contract Law', 'Banking and Finance Law'],
          }}
        />
        <Stack.Group screenOptions={{presentation: 'transparentModal'}}>
          <Stack.Screen
            name={ROUTES.LANGUAGE}
            component={LanguageScreen}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={ROUTES.START_CONVERSATION}
            component={StartConversationScreen}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
