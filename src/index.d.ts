// Type definitions for React Native Firebase v4.2.0
// Project: https://github.com/invertase/react-native-firebase
// Definitions by: React Native Firebase Contributors
// TypeScript Version: 2.1

declare module 'react-native-firebase' {
  /** 3rd party provider Credentials */
  export type AuthCredential = {
    providerId: string;
    token: string;
    secret: string;
  };

  type FirebaseModuleAndStatics<M, S = {}> = {
    (): M;
    nativeModuleExists: boolean;
  } & S;

  // type AdmobModule = FirebaseModuleAndStatics<RNFirebase.admob.AdMob>;
  type AnalyticsModule = FirebaseModuleAndStatics<RNFirebase.Analytics>;
  type AuthModule = FirebaseModuleAndStatics<
    RNFirebase.auth.Auth,
    RNFirebase.auth.AuthStatics
  >;
  type ConfigModule = FirebaseModuleAndStatics<RNFirebase.config.Config>;
  type CrashlyticsModule = FirebaseModuleAndStatics<
    RNFirebase.crashlytics.Crashlytics
  >;
  type DatabaseModule = FirebaseModuleAndStatics<
    RNFirebase.database.Database,
    RNFirebase.database.DatabaseStatics
  >;
  type FirestoreModule = FirebaseModuleAndStatics<
    RNFirebase.firestore.Firestore,
    RNFirebase.firestore.FirestoreStatics
  >;
  type FunctionsModule = FirebaseModuleAndStatics<
    RNFirebase.functions.Functions,
    RNFirebase.functions.FunctionsStatics
  >;
  type IidModule = FirebaseModuleAndStatics<RNFirebase.iid.InstanceId>;
  // type InvitesModule = FirebaseModuleAndStatics<RNFirebase.invites.Invites>;
  type LinksModule = FirebaseModuleAndStatics<
    RNFirebase.links.Links,
    RNFirebase.links.LinksStatics
  >;
  type MessagingModule = FirebaseModuleAndStatics<
    RNFirebase.messaging.Messaging,
    RNFirebase.messaging.MessagingStatics
  >;
  type NotificationsModule = FirebaseModuleAndStatics<
    RNFirebase.notifications.Notifications,
    RNFirebase.notifications.NotificationsStatics
  >;
  type PerfModule = FirebaseModuleAndStatics<RNFirebase.perf.Perf>;
  type StorageModule = FirebaseModuleAndStatics<RNFirebase.storage.Storage>;
  // type UtilsModule: FirebaseModuleAndStatics<RNFirebase.utils.Utils>;

  // Modules commented-out do not currently have type definitions
  export class Firebase {
    private constructor();
    // admob: AdmobModule;
    analytics: AnalyticsModule;
    auth: AuthModule;
    config: ConfigModule;
    crashlytics: CrashlyticsModule;
    database: DatabaseModule;
    firestore: FirestoreModule;
    functions: FunctionsModule;
    iid: IidModule;
    // invites: InvitesModule;
    links: LinksModule;
    messaging: MessagingModule;
    notifications: NotificationsModule;
    perf: PerfModule;
    storage: StorageModule;
    // utils: UtilsModule;
    initializeApp(options: Firebase.Options, name: string): App;
    app(name?: string): App;
    readonly apps: App[];
    readonly SDK_VERSION: string;
  }
  namespace Firebase {
    interface Options {
      apiKey: string;
      appId: string;
      databaseURL: string;
      messagingSenderId: string;
      projectId: string;
      storageBucket: string;
    }
  }
  const firebase: Firebase;
  export default firebase;
  // export const admob: AdmobModule;
  export const analytics: AnalyticsModule;
  export const auth: AuthModule;
  export const config: ConfigModule;
  export const crashlytics: CrashlyticsModule;
  export const database: DatabaseModule;
  export const firestore: FirestoreModule;
  export const iid: IidModule;
  // export const invites: InvitesModule;
  export const links: LinksModule;
  export const messaging: MessagingModule;
  export const notifications: NotificationsModule;
  export const storage: StorageModule;

  // Modules commented-out do not currently have type definitions
  export class App {
    private constructor();
    // admob(): RNFirebase.admob.AdMob;
    analytics(): RNFirebase.Analytics;
    auth(): RNFirebase.auth.Auth;
    config(): RNFirebase.config.Config;
    crashlytics(): RNFirebase.crashlytics.Crashlytics;
    database(): RNFirebase.database.Database;
    firestore(): RNFirebase.firestore.Firestore;
    functions(): RNFirebase.functions.Functions;
    iid(): RNFirebase.iid.InstanceId;
    // invites(): RNFirebase.invites.Invites;
    links(): RNFirebase.links.Links;
    messaging(): RNFirebase.messaging.Messaging;
    notifications(): RNFirebase.notifications.Notifications;
    perf(): RNFirebase.perf.Perf;
    storage(): RNFirebase.storage.Storage;
    // utils(): RNFirebase.utils.Utils;
    readonly name: string;
    readonly options: Firebase.Options;

    onReady: () => Promise<App>;
  }

  export namespace RNFirebase {
    type Handler<T> = (value: T) => void;
    type ErrorHandler = Handler<RnError>;

    export interface RnError extends Error {
      code?: string;
    }

    type GoogleApiAvailabilityType = {
      status: number;
      isAvailable: boolean;
      isUserResolvableError?: boolean;
      error?: string;
    };

    /**
     * pass custom options by passing an object with configuration options.
     * The configuration object will be generated first by the native configuration object, if set and then will be overridden if passed in JS.
     * That is, all of the following key/value pairs are optional if the native configuration is set.
     */
    interface configurationOptions {
      /**
       *  default false
       *  When set to true, RNFirebase will log messages to the console and fire debug events we can listen to in js
       * @usage
       * firebase.on('debug', msg => console.log('Received debug message', msg))
       */
      debug?: boolean;
      /**
       * default false
       * When set to true, database persistence will be enabled.
       */
      persistence?: boolean;
      /**
       * Default from app [NSBundle mainBundle]  The bundle ID for the app to be bundled with
       */
      bundleID?: string;
      /**
       * defualt ""
       * The Google App ID that is used to uniquely identify an instance of an app.
       */
      googleAppID?: string;
      /**
       * deufalt ""
       * The database root (i.e. https://my-app.firebaseio.com)
       */
      databaseURL?: string;
      /**
       * defualt ""
       * URL scheme to set up durable deep link service
       */
      deepLinkURLScheme?: string;
      /**
       * defualt ""
       * The Google Cloud storage bucket name
       */
      storageBucket?: string;
      /**
       * default ""
       * The Android client ID used in Google AppInvite when an iOS app has it's android version
       */
      androidClientID?: string;
      /**
       * default  ""
       * The Project number from the Google Developer's console used to configure Google Cloud Messaging
       */
      GCMSenderID?: string;
      /**
       * default ""
       * The tracking ID for Google Analytics
       */
      trackingID?: string;
      /**
       * default ""
       * The OAuth2 client ID for iOS application used to authenticate Google Users for signing in with Google
       */
      clientID?: string;
      /**
       * defualt ""
       * The secret iOS API key used for authenticating requests from our app
       */
      APIKey?: string;
    }

    namespace storage {
      /**
       * The Firebase Storage service interface.
       *
       * An instance can be accessed using `firebase.storage()`.
       */
      class Storage {
        static TaskState: TaskState;
        static TaskEvent: TaskState;
        static Native?: {
          MAIN_BUNDLE_PATH: string,
          CACHES_DIRECTORY_PATH: string,
          DOCUMENT_DIRECTORY_PATH: string,
          EXTERNAL_DIRECTORY_PATH: string,
          EXTERNAL_STORAGE_DIRECTORY_PATH: string,
          TEMP_DIRECTORY_PATH: string,
          LIBRARY_DIRECTORY_PATH: string,
          FILETYPE_REGULAR: string,
          FILETYPE_DIRECTORY: string,
        };

        /**
         * The app associated with the Storage service instance.
         */
        app: App;

        /**
         * Returns a reference for the given path in the default bucket.
         *
         * @param path A relative path to initialize the reference with, for
         *        example path/to/image.jpg. If not passed, the returned
         *        reference points to the bucket root.
         */
        ref(path?: string): Reference;

        /**
         * Returns a reference for the given absolute URL.
         *
         * @param url URL must be in the form of either
         *        -   a Cloud Storage URL, for example gs://bucket/files/image.png; or
         *        -   download URL taken from object metadata.
         */
        refFromURL(url: string): Reference;

        /**
         * @param time The new maximum operation retry time in milliseconds.
         */
        setMaxOperationRetryTime(time: number): void;

        /**
         * @param time The new maximum upload retry time in milliseconds.
         */
        setMaxUploadRetryTime(time: number): void;

        /**
         * @param time The new maximum download retry time in milliseconds.
         */
        setMaxDownloadRetryTime(time: number): void;
      }

      /**
       * A reference represents a reference to a Google Cloud Storage object.
       *
       * You can upload, download, and delete objects, as well as get/set object
       * metadata for a file via this reference.
       */
      interface Reference {
        fullPath: string;
        toString(): string;

        /**
         * Returns a reference to a relative path from this reference.
         *
         * @param path The relative path
         */
        child(path: string): Reference;

        /**
         * Deletes the object at this reference's location.
         */
        delete(): Promise<void>;

        /**
         * Fetches a long lived download URL for this object.
         */
        getDownloadURL(): Promise<string>;

        /**
         * Fetches metadata for the object at this location, if one exists.
         *
         * @returns A promise that is resolved with the metadata; or rejected on
         *          failure, including if the object does not exist.
         */
        getMetadata(): Promise<FullMetadata>;

        /**
         * Updates the metadata for the object at this location, if one exists.
         *
         * @param metadata
         */
        updateMetadata(metadata: SettableMetadata): Promise<FullMetadata>;

        /**
         * Downloads the storage object for this reference to the device file
         * path specified.
         *
         * @param filePath The destination path of the downloaded file.
         */
        downloadFile(filePath: string): StorageTask<DownloadTaskSnapshot>;

        /**
         * Uploads the file path specified from the device into a storage object
         * for this reference.
         *
         * @param filePath The path to the file on the device. It must be a full
         *        file path.
         * @param metadata The metadata to associate with this file.
         */
        putFile(
          filePath: string, metadata?: SettableMetadata
        ): StorageTask<UploadTaskSnapshot>;
      }

      interface FullMetadata extends SettableMetadata {
        bucket: string;
        fullPath: string;
        generation: string;
        metageneration: string;
        name: string;
        size: number;
        timeCreated: string;
        updated: string;
        md5Hash?: string | null;
      }

      interface SettableMetadata {
        cacheControl?: string | null;
        contentDisposition?: string | null;
        contentEncoding?: string | null;
        contentLanguage?: string | null;
        contentType?: string | null;
        customMetadata?: Partial<Record<string, string>>;
      }

      interface StorageTask<T> extends Promise<T> {
        on(
          event: TaskEvent,
          next: Handler<T>,
          error?: ErrorHandler,
          complete?: Handler<T>,
        ): () => void;
        on(
          event: TaskEvent,
          observer: {
            next?: Handler<T>;
            error?: ErrorHandler;
            complete?: Handler<T>;
          }
        ): () => void;

        /**
         * Not supported by react-native-firebase
         */
        pause(): void;

        /**
         * Not supported by react-native-firebase
         */
        resume(): void;

        /**
         * Not supported by react-native-firebase
         */
        cancel(): void;
      }

      interface UploadTaskSnapshot {
        bytesTransferred: number;
        downloadURL: string | null;
        metadata: FullMetadata;
        ref: Reference;
        state: TaskState;
        task: StorageTask<UploadTaskSnapshot>;
        totalBytes: number;
      }

      interface DownloadTaskSnapshot {
        bytesTransferred: number;
        ref: Reference;
        state: TaskState;
        totalBytes: number;
      }

      enum TaskEvent {
        STATE_CHANGED = 'state_changed',
      }

      enum TaskState {
        CANCELLED = 'cancelled',
        ERROR = 'error',
        PAUSED = 'paused',
        RUNNING = 'running',
        SUCCESS = 'success',
      }
    }

    namespace database {
      interface Database {
        /**
         * Returns a new firebase reference instance
         * */
        ref(path?: string): RnReference;

        /**
         * register listener
         */
        on(
          path: string,
          modifiersString: string,
          modifiers: Array<string>,
          eventName: string,
          cb: () => void,
          errorCb: () => void
        ): any;

        /**
         * unregister listener
         */
        off(
          path: string,
          modifiersString: string,
          eventName?: string,
          origCB?: () => void
        ): any;

        /**
         * Removes all event handlers and their native subscriptions
         */
        cleanup(): Promise<any>;

        /**
         * connect to firebase backend
         */
        goOnline(): void;

        /**
         * disconnect to firebase backend
         */
        goOffline(): void;

        [key: string]: any;
      }

      interface RnReference extends Reference {
        keepSynced(bool: boolean): any;

        filter(name: string, value: any, key?: string): any;

        [key: string]: any;
      }

      type QueryEventType =
        | 'value'
        | 'child_added'
        | 'child_removed'
        | 'child_changed'
        | 'child_moved';
      type QuerySuccessCallback = (
        snapshot: DataSnapshot,
        previousChildId?: string | null
      ) => void;
      type QueryErrorCallback = (e: Error) => void;

      interface Query {
        endAt(
          value: number | string | boolean | null,
          key?: string
        ): database.Query;

        equalTo(
          value: number | string | boolean | null,
          key?: string
        ): database.Query;

        isEqual(other: database.Query | null): boolean;

        limitToFirst(limit: number): database.Query;

        limitToLast(limit: number): database.Query;

        off(
          eventType?: QueryEventType,
          callback?: QuerySuccessCallback,
          context?: Object
        ): void;

        on(
          eventType: QueryEventType,
          callback: QuerySuccessCallback,
          cancelCallbackOrContext?: QueryErrorCallback,
          context?: Object
        ): (
          a: database.DataSnapshot | null,
          b?: string
        ) => QuerySuccessCallback;

        once(
          eventType: QueryEventType,
          successCallback?: QuerySuccessCallback,
          failureCallbackOrContext?: QueryErrorCallback,
          context?: Object
        ): Promise<DataSnapshot>;

        orderByChild(path: string): database.Query;

        orderByKey(): database.Query;

        orderByPriority(): database.Query;

        orderByValue(): database.Query;

        ref: database.Reference;

        startAt(
          value: number | string | boolean | null,
          key?: string
        ): database.Query;

        toJSON(): Object;

        toString(): string;
      }

      interface DataSnapshot {
        child(path: string): database.DataSnapshot;

        exists(): boolean;

        exportVal(): any;

        forEach(action: (a: database.DataSnapshot) => boolean): boolean;

        getPriority(): string | number | null;

        hasChild(path: string): boolean;

        hasChildren(): boolean;

        key: string | null;

        numChildren(): number;

        ref: database.Reference;

        toJSON(): Object | null;

        val(): any;
      }

      interface ThenableReference<T> extends Promise<T> {}

      interface ThenableReference<T> extends Reference {}

      interface Reference extends database.Query {
        child(path: string): database.Reference;

        key: string | null;

        onDisconnect(): any;

        parent: database.Reference | null;

        push(
          value?: any,
          onComplete?: (a: RnError | null) => any
        ): ThenableReference<any>;

        remove(onComplete?: (a: RnError | null) => any): Promise<any>;

        root: database.Reference;

        set(value: any, onComplete?: (a: RnError | null) => any): Promise<any>;

        setPriority(
          priority: string | number | null,
          onComplete: (a: RnError | null) => any
        ): Promise<any>;

        setWithPriority(
          newVal: any,
          newPriority: string | number | null,
          onComplete?: (a: RnError | null) => any
        ): Promise<any>;

        transaction(
          transactionUpdate: (a: any) => any,
          onComplete?: (
            a: RnError | null,
            b: boolean,
            c: database.DataSnapshot | null
          ) => any,
          applyLocally?: boolean
        ): Promise<any>;

        update(
          values: Object,
          onComplete?: (a: RnError | null) => any
        ): Promise<any>;
      }

      interface DatabaseStatics {
        /** @see https://www.firebase.com/docs/java-api/javadoc/com/firebase/client/ServerValue.html#TIMESTAMP */
        ServerValue: {
          TIMESTAMP: {
            [key: string]: string;
          };
        };
      }
    }

    /**
     * firebase Analytics
     */
    interface Analytics {
      /**Log a custom event with optional params. */
      logEvent(event: string, params?: Object): void;

      /** Sets whether analytics collection is enabled for this app on this device. */
      setAnalyticsCollectionEnabled(enabled: boolean): void;

      /**
       * Sets the current screen name, which specifies the current visual context in your app.
       * Whilst screenClassOverride is optional,
       * it is recommended it is always sent as your current class name,
       * for example on Android it will always show as 'MainActivity' if not specified.
       */
      setCurrentScreen(
        screenName: string | null,
        screenClassOverride?: string
      ): void;

      /**
       * Sets the minimum engagement time required before starting a session.
       * The default value is 10000 (10 seconds)
       */
      setMinimumSessionDuration(miliseconds: number): void;

      /**
       * Sets the duration of inactivity that terminates the current session.
       * The default value is 1800000 (30 minutes).
       */
      setSessionTimeoutDuration(miliseconds: number): void;

      /**
       * Gives a user a uniqiue identificaition.
       * @example
       * const id = firebase.auth().currentUser.uid;
       *
       * firebase.analytics().setUserId(id);
       */
      setUserId(id: string | null): void;

      /**
       * Sets a key/value pair of data on the current user.
       */
      setUserProperty(name: string, value: string | null): void;

      [key: string]: any;
    }

    type AdditionalUserInfo = {
      isNewUser: boolean;
      profile?: Object;
      providerId: string;
      username?: string;
    };

    type UserCredential = {
      additionalUserInfo?: AdditionalUserInfo;
      user: User;
    };

    type UserInfo = {
      displayName?: string;
      email?: string;
      phoneNumber?: string;
      photoURL?: string;
      providerId: string;
      uid: string;
    };

    type UpdateProfile = {
      displayName?: string;
      photoURL?: string;
    };

    type UserMetadata = {
      creationTime?: string;
      lastSignInTime?: string;
    };

    interface User {
      /**
       * The user's display name (if available).
       */
      displayName: string | null;
      /**
       * - The user's email address (if available).
       */
      email: string | null;
      /**
       * - True if the user's email address has been verified.
       */
      emailVerified: boolean;
      /**
       *
       */
      isAnonymous: boolean;

      metadata: UserMetadata;

      phoneNumber: string | null;
      /**
       * - The URL of the user's profile picture (if available).
       */
      photoURL: string | null;
      /**
       * - Additional provider-specific information about the user.
       */
      providerData: Array<UserInfo>;
      /**
       *  - The authentication provider ID for the current user.
       *  For example, 'facebook.com', or 'google.com'.
       */
      providerId: string;
      /**
       *  - The user's unique ID.
       */
      uid: string;

      /**
       * Delete the current user.
       */
      delete(): Promise<void>;

      /**
       * Returns the users authentication token.
       *
       * @param forceRefresh: boolean - default to false
       */
      getIdToken(forceRefresh?: boolean): Promise<string>;

      getToken(forceRefresh?: boolean): Promise<string>;

      linkAndRetrieveDataWithCredential(
        credential: AuthCredential
      ): Promise<UserCredential>;

      /**
       * Link the user with a 3rd party credential provider.
       */
      linkWithCredential(credential: AuthCredential): Promise<User>;

      reauthenticateAndRetrieveDataWithCredential(
        credential: AuthCredential
      ): Promise<UserCredential>;

      /**
       * Re-authenticate a user with a third-party authentication provider
       */
      reauthenticateWithCredential(credential: AuthCredential): Promise<void>;

      /**
       * Refreshes the current user.
       */
      reload(): Promise<void>;

      /**
       * Sends a verification email to a user.
       * This will Promise reject is the user is anonymous.
       */
      sendEmailVerification(
        actionCodeSettings?: ActionCodeSettings
      ): Promise<void>;

      toJSON(): object;

      unlink(providerId: string): Promise<User>;

      /**
       * Updates the user's email address.
       * See Firebase docs for more information on security & email validation.
       * This will Promise reject is the user is anonymous.
       */
      updateEmail(email: string): Promise<void>;

      /**
       * Important: this is a security sensitive operation that requires the user to have recently signed in.
       * If this requirement isn't met, ask the user to authenticate again and then call firebase.User#reauthenticate.
       * This will Promise reject is the user is anonymous.
       */
      updatePassword(password: string): Promise<void>;

      /**
       * Updates a user's profile data.
       * Profile data should be an object of fields to update:
       */
      updateProfile(updates: UpdateProfile): Promise<void>;
    }

    type ActionCodeSettings = {
      android: {
        installApp?: boolean;
        minimumVersion?: string;
        packageName: string;
      };
      handleCodeInApp?: boolean;
      iOS: {
        bundleId?: string;
      };
      url: string;
    };

    interface ActionCodeInfo {
      data: {
        email?: string;
        fromEmail?: string;
      };
      operation: 'PASSWORD_RESET' | 'VERIFY_EMAIL' | 'RECOVER_EMAIL';
    }

    interface ConfirmationResult {
      confirm(verificationCode: string): Promise<User | null>;

      verificationId: string | null;
    }

    type PhoneAuthSnapshot = {
      state: 'sent' | 'timeout' | 'verified' | 'error';
      verificationId: string;
      code: string | null;
      error: Error | null;
    };

    type PhoneAuthError = {
      code: string | null;
      verificationId: string;
      message: string | null;
      stack: string | null;
    };

    interface PhoneAuthListener {
      on(
        event: string,
        observer: (snapshot: PhoneAuthSnapshot) => void,
        errorCb?: (error: PhoneAuthError) => void,
        successCb?: (snapshot: PhoneAuthSnapshot) => void
      ): PhoneAuthListener;

      then(fn: (snapshot: PhoneAuthSnapshot) => void): Promise<any>;

      catch(fn: (error: Error) => void): Promise<any>;
    }

    namespace auth {
      type AuthResult = {
        authenticated: boolean;
        user: object | null;
      } | null;

      type AuthProvider = {
        PROVIDER_ID: string;
        credential: (token: string | null, secret?: string) => AuthCredential;
      };

      type EmailAuthProvider = {
        PROVIDER_ID: string;
        EMAIL_LINK_SIGN_IN_METHOD: string;
        EMAIL_PASSWORD_SIGN_IN_METHOD: string;
        credential: (email: string, password: string) => AuthCredential;
        credentialWithLink: (
          email: string,
          emailLink: string
        ) => AuthCredential;
      };

      interface Auth {
        readonly app: App;
        /**
         * Returns the current Firebase authentication state.
         */
        authResult: AuthResult | null;
        /**
         * Returns the currently signed-in user (or null). See the User class documentation for further usage.
         */
        currentUser: User | null;

        /**
         * Gets/Sets the language for the app instance
         */
        languageCode: string | null;

        /**
         * Listen for changes in the users auth state (logging in and out).
         * This method returns a unsubscribe function to stop listening to events.
         * Always ensure you unsubscribe from the listener when no longer needed to prevent updates to components no longer in use.
         */
        onAuthStateChanged(listener: Function): () => void;

        /**
         * Listen for changes in id token.
         * This method returns a unsubscribe function to stop listening to events.
         * Always ensure you unsubscribe from the listener when no longer needed to prevent updates to components no longer in use.
         */
        onIdTokenChanged(listener: Function): () => void;

        /**
         * Listen for changes in the user.
         * This method returns a unsubscribe function to stop listening to events.
         * Always ensure you unsubscribe from the listener when no longer needed to prevent updates to components no longer in use.
         */
        onUserChanged(listener: Function): () => void;

        signOut(): Promise<void>;

        signInAnonymouslyAndRetrieveData(): Promise<UserCredential>;

        /**
         * Sign an anonymous user.
         * If the user has already signed in, that user will be returned
         */
        signInAnonymously(): Promise<User>;

        createUserAndRetrieveDataWithEmailAndPassword(
          email: string,
          password: string
        ): Promise<UserCredential>;

        signInWithEmailLink(
          email: string,
          emailLink: string
        ): Promise<UserCredential>;

        isSignInWithEmailLink(emailLink: string): boolean;

        /**
         * We can create a user by calling the createUserWithEmailAndPassword() function.
         * The method accepts two parameters, an email and a password.
         */
        createUserWithEmailAndPassword(
          email: string,
          password: string
        ): Promise<User>;

        signInAndRetrieveDataWithEmailAndPassword(
          email: string,
          password: string
        ): Promise<UserCredential>;

        /**
         * To sign a user in with their email and password, use the signInWithEmailAndPassword() function.
         * It accepts two parameters, the user's email and password:
         */
        signInWithEmailAndPassword(
          email: string,
          password: string
        ): Promise<User>;

        signInAndRetrieveDataWithCustomToken(
          token: string
        ): Promise<UserCredential>;

        /**
         * Sign a user in with a self-signed JWT token.
         * To sign a user using a self-signed custom token,
         * use the signInWithCustomToken() function.
         * It accepts one parameter, the custom token:
         */
        signInWithCustomToken(token: string): Promise<User>;

        signInAndRetrieveDataWithCredential(
          credential: AuthCredential
        ): Promise<UserCredential>;

        /**
         * Sign in the user with a 3rd party credential provider.
         * credential requires the following properties:
         */
        signInWithCredential(credential: AuthCredential): Promise<User>;

        /**
         * Asynchronously signs in using a phone number.
         */
        signInWithPhoneNumber(
          phoneNumber: string,
          forceResend?: boolean
        ): Promise<ConfirmationResult>;

        /**
         * Returns a PhoneAuthListener to listen to phone verification events,
         * on the final completion event a PhoneAuthCredential can be generated for
         * authentication purposes.
         */
        verifyPhoneNumber(
          phoneNumber: string,
          autoVerifyTimeoutOrForceResend?: number | boolean,
          forceResend?: boolean
        ): PhoneAuthListener;

        /**
         * Sends a password reset email to the given email address.
         * Unlike the web SDK,
         * the email will contain a password reset link rather than a code.
         */
        sendPasswordResetEmail(
          email: string,
          actionCodeSettings?: ActionCodeSettings
        ): Promise<void>;

        sendSignInLinkToEmail(
          email: string,
          actionCodeSettings?: ActionCodeSettings
        ): Promise<void>;

        /**
         * Completes the password reset process, given a confirmation code and new password.
         */
        confirmPasswordReset(code: string, newPassword: string): Promise<void>;

        /**
         * Applies a verification code sent to the user by email or other out-of-band mechanism.
         */
        applyActionCode(code: string): Promise<void>;

        /**
         * Checks a verification code sent to the user by email or other out-of-band mechanism.
         */
        checkActionCode(code: string): Promise<ActionCodeInfo>;

        /**
         * Returns a list of authentication providers that can be used to sign in a given user (identified by its main email address).
         */
        fetchProvidersForEmail(email: string): Promise<Array<string>>;

        verifyPasswordResetCode(code: string): Promise<string>;

        [key: string]: any;
      }

      interface AuthStatics {
        EmailAuthProvider: EmailAuthProvider;
        PhoneAuthProvider: AuthProvider;
        GoogleAuthProvider: AuthProvider;
        GithubAuthProvider: AuthProvider;
        OAuthProvider: AuthProvider;
        TwitterAuthProvider: AuthProvider;
        FacebookAuthProvider: AuthProvider;
        PhoneAuthState: {
          CODE_SENT: string;
          AUTO_VERIFY_TIMEOUT: string;
          AUTO_VERIFIED: string;
          ERROR: string;
        };
      }
    }

    namespace messaging {
      interface Messaging {
        /**
         * Returns the devices FCM token.
         */
        getToken(): Promise<string>;

        deleteToken(authorizedEntity?: string, scope?: string): Promise<void>;

        /**
         * On a new message,
         * the payload object is passed to the listener callback.
         * This method is only triggered when the app is running.
         */
        onMessage(listener: (message: any) => any): () => any;

        /**
         * On the event a devices FCM token is refreshed by Google,
         *  the new token is returned in a callback listener.
         */
        onTokenRefresh(listener: (token: string) => any): () => any;

        /**
         * Requests app notification permissions in an Alert dialog.
         */
        requestPermission(): Promise<boolean>;

        /**
         * Checks if the app has notification permissions.
         */
        hasPermission(): Promise<boolean>;

        /**
         * Send an upstream message
         */
        sendMessage(remoteMessage: RemoteMessage): Promise<void>;

        /**
         * Subscribes the device to a topic.
         */
        subscribeToTopic(topic: string): void;

        /**
         * Unsubscribes the device from a topic.
         */
        unsubscribeFromTopic(topic: string): void;
      }

      class RemoteMessage {
        collapseKey?: string;
        data: Object;
        from?: string;
        messageId?: string;
        messageType: string;
        sentTime?: number;
        to?: string;
        ttl?: number;

        constructor();

        setCollapseKey(collapseKey: string): RemoteMessage;
        setData(data: Object): RemoteMessage;
        setMessageId(messageId: string): RemoteMessage;
        setMessageType(messageType: string): RemoteMessage;
        setTo(to: string): RemoteMessage;
        setTtl(ttl: number): RemoteMessage;
      }

      interface MessagingStatics {
        RemoteMessage: typeof RemoteMessage;
      }
    }

    namespace iid {
      interface InstanceId {
        delete(): Promise<void>;
        get(): Promise<string>;
        getToken(authorizedEntity?: string, scope?: string): Promise<string>;
        deleteToken(authorizedEntity?: string, scope?: string): Promise<void>;
      }
    }

    namespace notifications {
      interface AndroidNotifications {
        createChannel(channel: Android.Channel): Promise<void>;
        createChannelGroup(channelGroup: Android.ChannelGroup): Promise<void>;
        createChannelGroups(
          channelGroups: Android.ChannelGroup[]
        ): Promise<void>;
        createChannels(channels: Android.Channel[]): Promise<void>;
        deleteChannelGroup(groupId: string): Promise<void>;
        deleteChannel(channelId: string): Promise<void>;
      }

      type BackgroundFetchResultValue = string;
      type CompletionHandler = (
        backgroundFetchResult: BackgroundFetchResultValue
      ) => void;

      interface Notifications {
        android: AndroidNotifications;

        /**
         * Cancels all notifications
         */
        cancelAllNotifications(): void;

        /**
         * Cancels a notification by ID
         */
        cancelNotification(notificationId: string): void;

        displayNotification(notification: Notification): Promise<void>;

        /**
         * Returns the current badge number on the app icon.
         */
        getBadge(): Promise<number>;

        getInitialNotification(): Promise<NotificationOpen>;

        getScheduledNotifications(): Promise<Notification[]>;

        onNotification(
          listener: (notification: Notification) => any
        ): () => any;

        onNotificationDisplayed(
          listener: (notification: Notification) => any
        ): () => any;

        onNotificationOpened(
          listener: (notificationOpen: NotificationOpen) => any
        ): () => any;

        removeAllDeliveredNotifications(): void;

        removeDeliveredNotification(notificationId: string): void;

        /**
         * Schedule a local notification to be shown on the device.
         */
        scheduleNotification(notification: Notification, schedule: any): any;

        /**
         * Sets the badge number on the iOS app icon.
         */
        setBadge(badge: number): void;
      }

      class Notification {
        android: AndroidNotification;
        ios: IOSNotification;
        body: string;
        data: any;
        notificationId: string;
        sound?: string;
        subtitle?: string;
        title: string;

        constructor();

        setBody(body: string): Notification;
        setData(data: any): Notification;
        setNotificationId(notificationId: string): Notification;
        setSound(sound: string): Notification;
        setSubtitle(subtitle: string): Notification;
        setTitle(title: string): Notification;
      }

      class NotificationOpen {
        action: string;
        notification: Notification;
        results?: any;
      }

      class AndroidNotification {
        actions?: Android.Action[];
        autoCancel?: boolean;
        badgeIconType?: Android.BadgeIconType;
        bigPicture?: any;
        bigText?: any;
        category?: Android.Category;
        channelId?: string;
        clickAction?: string;
        color?: string;
        colorized?: boolean;
        contentInfo?: string;
        defaults?: Android.Defaults[];
        group?: string;
        groupAlertBehaviour?: Android.GroupAlert;
        groupSummary?: boolean;
        largeIcon?: string;
        lights?: Android.Lights;
        localOnly?: boolean;
        number?: number;
        ongoing?: boolean;
        onlyAlertOnce?: boolean;
        people?: string[];
        priority?: Android.Priority;
        progress?: Android.Progress;
        remoteInputHistory?: string[];
        shortcutId?: string;
        showWhen?: boolean;
        smallIcon?: any;
        sortKey?: string;
        tag?: string;
        ticker?: string;
        timeoutAfter?: number;
        usesChronometer?: boolean;
        vibrate?: number[];
        visibility?: Android.Visibility;
        when?: number;

        addAction(action: Android.Action): Notification;
        addPerson(person: string): Notification;
        setAutoCancel(autoCancel: boolean): Notification;
        setBadgeIconType(badgeIconType: Android.BadgeIconType): Notification;
        setBigPicture(
          picture: string,
          largeIcon?: string,
          contentTitle?: string,
          summaryText?: string
        ): Notification;
        setBigText(
          text: string,
          contentTitle?: string,
          summaryText?: string
        ): Notification;
        setCategory(category: Android.Category): Notification;
        setChannelId(channelId: string): Notification;
        setClickAction(clickAction: string): Notification;
        setColor(color: string): Notification;
        setColorized(colorized: boolean): Notification;
        setContentInfo(contentInfo: string): Notification;
        setDefaults(defaults: Android.Defaults[]): Notification;
        setGroup(group: string): Notification;
        setGroupAlertBehaviour(
          groupAlertBehaviour: Android.GroupAlert
        ): Notification;
        setGroupSummary(groupSummary: boolean): Notification;
        setLargeIcon(largeIcon: string): Notification;
        setLights(argb: number, onMs: number, offMs: number): Notification;
        setLocalOnly(localOnly: boolean): Notification;
        setNumber(number: number): Notification;
        setOngoing(ongoing: boolean): Notification;
        setOnlyAlertOnce(onlyAlertOnce: boolean): Notification;
        setPriority(priority: Android.Priority): Notification;
        setProgress(
          max: number,
          progress: number,
          indeterminate: boolean
        ): Notification;
        //setPublicVersion(publicVersion: Notification): Notification
        setRemoteInputHistory(remoteInputHistory: string[]): Notification;
        setShortcutId(shortcutId: string): Notification;
        setShowWhen(showWhen: boolean): Notification;
        setSmallIcon(icon: string, level?: number): Notification;
        setSortKey(sortKey: string): Notification;
        setTag(tag: string): Notification;
        setTicker(ticker: string): Notification;
        setTimeoutAfter(timeoutAfter: number): Notification;
        setUsesChronometer(usesChronometer: boolean): Notification;
        setVibrate(vibrate: number[]): Notification;
        setVisibility(visibility: Android.Visibility): Notification;
        setWhen(when: number): Notification;
      }

      namespace Android {
        class Action {
          action: string;
          allowGeneratedReplies: boolean;
          icon: string;
          remoteInputs: RemoteInput[];
          semanticAction?: SemanticAction;
          showUserInterface?: boolean;
          title: string;

          constructor(action: string, icon: string, title: string);

          addRemoteInput(remoteInput: RemoteInput): Action;
          setAllowGenerateReplies(allowGeneratedReplies: boolean): Action;
          setSemanticAction(semanticAction: SemanticAction): Action;
          setShowUserInterface(showUserInterface: boolean): Action;
        }

        class RemoteInput {
          allowedDataTypes: any[];
          allowFreeFormInput?: boolean;
          choices: string[];
          label?: string;
          resultKey: string;

          constructor(resultKey: string);

          setAllowDataType(mimeType: string, allow: boolean): RemoteInput;
          setAllowFreeFormInput(allowFreeFormInput: boolean): RemoteInput;
          setChoices(choices: string[]): RemoteInput;
          setLabel(label: string): RemoteInput;
        }

        class Channel {
          channelId: string;
          name: string;
          importance: Importance;

          bypassDnd?: boolean;
          description?: string;
          group?: string;
          lightColor?: string;
          lightsEnabled?: boolean;
          lockScreenVisibility?: Visibility;
          showBadge?: boolean;
          sound?: string;
          vibrationEnabled?: boolean;
          vibrationPattern?: number[];

          constructor(channelId: string, name: string, importance: Importance);

          enableLights(lightsEnabled: boolean): Channel;
          enableVibration(vibrationEnabled: boolean): Channel;
          setBypassDnd(bypassDnd: boolean): Channel;
          setDescription(description: string): Channel;
          setGroup(groupId: string): Channel;
          setLightColor(lightColor: string): Channel;
          setLockScreenVisibility(lockScreenVisibility: Visibility): Channel;
          setShowBadge(showBadge: boolean): Channel;
          setSound(sound: string): Channel;
          setVibrationPattern(vibrationPattern: number[]): Channel;
        }

        class ChannelGroup {
          groupId: string;
          name: string;

          constructor(groupId: string, name: string);
        }

        export enum BadgeIconType {
          Large = 2,
          None = 0,
          Small = 1,
        }

        export type Category =
          | 'alarm'
          | 'call'
          | 'email'
          | 'err'
          | 'event'
          | 'msg'
          | 'progress'
          | 'promo'
          | 'recommendation'
          | 'reminder'
          | 'service'
          | 'social'
          | 'status'
          | 'system'
          | 'transport';

        export enum Defaults {
          All = -1,
          Lights = 4,
          Sound = 1,
          Vibrate = 2,
        }

        export enum GroupAlert {
          All = 0,
          Children = 2,
          Summary = 1,
        }

        export enum Importance {
          Default = 3,
          High = 4,
          Low = 2,
          Max = 5,
          Min = 1,
          None = 3,
          Unspecified = -1000,
        }

        export enum Priority {
          Default = 0,
          High = 1,
          Low = -1,
          Max = 2,
          Min = -2,
        }

        export enum SemanticAction {
          Archive = 5,
          Call = 10,
          Delete = 4,
          MarkAsRead = 2,
          MarkAsUnread = 3,
          Mute = 6,
          None = 0,
          Reply = 1,
          ThumbsDown = 9,
          ThumbsUp = 8,
          Unmute = 7,
        }

        export enum Visibility {
          Private = 0,
          Public = 1,
          Secret = -1,
        }

        class Lights {
          argb: number;
          offMs: number;
          onMs: number;
        }

        class Progress {
          indeterminate: boolean;
          max: number;
          progress: number;
        }
      }

      class IOSNotification {
        alertAction?: string;
        attachments: IOSAttachment[];
        badge?: string;
        category?: string;
        hasAction?: boolean;
        launchImage?: string;
        threadIdentifier?: string;
        complete?: CompletionHandler;

        addAttachment(
          identifier: string,
          url: string,
          options: IOSAttachmentOptions
        ): Notification;
        setAlertAction(alertAction: string): Notification;
        setBadge(badge: string): Notification;
        setCategory(category: string): Notification;
        setHasAction(hasAction: boolean): Notification;
        setLaunchImage(launchImage: string): Notification;
        setThreadIdentifier(threadIdentifier: string): Notification;
      }

      class IOSAttachment {
        identifier: string;
        options: IOSAttachmentOptions;
        url: string;
      }

      class IOSAttachmentOptions {
        typeHint: string;
        thumbnailHidden: boolean;
        thumbnailClippingRect: any;
        thumbnailTime: string;
      }

      interface NotificationsStatics {
        Android: {
          Action: typeof Android.Action;
          BadgeIconType: typeof Android.BadgeIconType;
          Category: Android.Category;
          Channel: typeof Android.Channel;
          ChannelGroup: typeof Android.ChannelGroup;
          Defaults: typeof Android.Defaults;
          GroupAlert: typeof Android.GroupAlert;
          Importance: typeof Android.Importance;
          Priority: typeof Android.Priority;
          RemoteInput: typeof Android.RemoteInput;
          SemanticAction: typeof Android.SemanticAction;
          Visibility: typeof Android.Visibility;
        };
        Notification: typeof Notification;
      }
    }

    namespace config {
      interface ConfigSnapshot {
        source: string;
        val(): any;
      }

      interface Object<ConfigSnapshot> {
        [key: string]: ConfigSnapshot;
      }

      interface Config {
        /** Enable Remote Config developer mode to allow for frequent refreshes of the cache. */
        enableDeveloperMode(): void;

        /**
         * Sets default values for the app to use when accessing values.
         * Any data fetched and activated will override any default values.
         * Any values in the defaults but not on Firebase will be untouched.
         */
        setDefaults(defaults: object): void;

        /**
         * Fetches the remote config data from Firebase, defined in the dashboard.
         * If duration is defined (seconds), data will be locally cached for this duration.
         *
         * The default duration is 43200 seconds (12 hours).
         * To force a cache refresh call the method with a duration of 0.
         */
        fetch(duration?: number): Promise<string>;

        /**
         * Fetches the remote config data from Firebase, defined in the dashboard.
         * The default expiration duration is 43200 seconds (12 hours)
         */
        activateFetched(): Promise<boolean>;

        /**
         * Gets a config item by key.
         * Returns a snapshot containing source (default, remote or static) and val function.
         */
        getValue(key: string): Promise<ConfigSnapshot>;

        /**
         * Gets multiple values by key.
         * Returns a snapshot object with snapshot keys e.g. snapshots.foo.val().
         */
        getValues(array: Array<string>): Promise<Object<ConfigSnapshot>>;

        /**
         * Returns all keys as an array by a prefix. If no prefix is defined all keys are returned.
         */
        getKeysByPrefix(prefix?: string): Promise<Array<String>>;

        /**
         * Sets the default values from a resource:
         * - Android: Id for the XML resource, which should be in your application's res/xml folder.
         * - iOS: The plist file name, with no file name extension.
         */
        setDefaultsFromResource(resource: string | number): void;
      }
    }

    namespace perf {
      type HttpMethod =
        | 'CONNECT'
        | 'DELETE'
        | 'GET'
        | 'HEAD'
        | 'OPTIONS'
        | 'PATCH'
        | 'POST'
        | 'PUT'
        | 'TRACE';

      interface Perf {
        /**
         * Globally enable or disable performance monitoring.
         */
        setPerformanceCollectionEnabled(enabled: boolean): void;

        /**
         * Returns a new Trace instance.
         */
        newTrace(trace: string): Trace;

        /**
         * Returns a new HTTP Metric instance.
         */
        newHttpMetric(url: string, httpMethod: HttpMethod): HttpMetric;
      }

      interface Trace {
        /**
         * Return an attribute by name, or null if it does not exist.
         */
        getAttribute(attribute: string): Promise<string | null>;

        /**
         * Return an object of key-value attributes.
         */
        getAttributes(): Promise<Object>;

        /**
         * Get a metric by name. Returns 0 if it does not exist.
         */
        getMetric(metricName: string): Promise<number>;

        /**
         * Increment a metric by name and value.
         */
        incrementMetric(metricName: string, incrementBy: number): Promise<null>;

        /**
         * Set an attribute. Returns true if it was set, false if it was not.
         */
        putAttribute(attribute: string, value: string): Promise<true | false>;

        /**
         * Set a metric.
         */
        putMetric(metricName: string, value: number): Promise<null>;

        /**
         * Remove an attribute by name.
         */
        removeAttribute(attribute: string): Promise<null>;

        /**
         * Start a Trace instance.
         */
        start(): Promise<null>;

        /**
         * Stop a Trace instance.
         */
        stop(): Promise<null>;
      }

      interface HttpMetric {
        /**
         * Return an attribute by name, or null if it does not exist.
         */
        getAttribute(attribute: string): Promise<string | null>;

        /**
         * Return an object of key-value attributes.
         */
        getAttributes(): Promise<Object>;

        /**
         * Set an attribute. Returns true if it was set, false if it was not.
         */
        putAttribute(attribute: string, value: string): Promise<true | false>;

        /**
         * Remove an attribute by name.
         */
        removeAttribute(attribute: string): Promise<null>;

        /**
         * Set the request HTTP response code.
         */
        setHttpResponseCode(code: number): Promise<null>;

        /**
         * Set the request payload size, in bytes.
         */
        setRequestPayloadSize(bytes: number): Promise<null>;

        /**
         * Set the response content type.
         */
        setResponseContentType(type: string): Promise<null>;

        /**
         * Set the response payload size, in bytes.
         */
        setResponsePayloadSize(bytes: number): Promise<null>;

        /**
         * Start a HttpMetric instance.
         */
        start(): Promise<null>;

        /**
         * Stop a HttpMetric instance.
         */
        stop(): Promise<null>;
      }
    }

    namespace crashlytics {
      interface Crashlytics {
        /**
         * Forces a crash. Useful for testing your application is set up correctly.
         */
        crash(): void;

        /**
         * Logs a message that will appear in any subsequent crash reports.
         */
        log(message: string): void;

        /**
         * Logs a non fatal exception.
         */
        recordError(code: number, message: string): void;

        /**
         * Set a boolean value to show alongside any subsequent crash reports.
         */
        setBoolValue(key: string, value: boolean): void;

        /**
         * Set a float value to show alongside any subsequent crash reports.
         */
        setFloatValue(key: string, value: number): void;

        /**
         * Set an integer value to show alongside any subsequent crash reports.
         */
        setIntValue(key: string, value: number): void;

        /**
         * Set a string value to show alongside any subsequent crash reports.
         */
        setStringValue(key: string, value: string): void;

        /**
         * Set the user ID to show alongside any subsequent crash reports.
         */
        setUserIdentifier(userId: string): void;
      }
    }

    namespace links {
      interface Links {
        /** Creates a standard dynamic link. */
        createDynamicLink(dynamicLink: DynamicLink): Promise<string>;
        /** Creates a short dynamic link. */
        createShortDynamicLink(type: 'SHORT' | 'UNGUESSABLE'): Promise<string>;
        /**
         * Returns the URL that the app has been launched from. If the app was
         * not launched from a URL the return value will be null.
         */
        getInitialLink(): Promise<string | null>;
        /**
         * Subscribe to URL open events while the app is still running.
         * The listener is called from URL open events whilst the app is still
         * running, use getInitialLink for URLs which cause the app to open
         * from a previously closed / not running state.
         * Returns an unsubscribe function, call the returned function to
         * unsubscribe from all future events.
         */
        onLink(listener: (url: string) => void): () => void;
      }

      class DynamicLink {
        analytics: AnalyticsParameters;
        android: AndroidParameters;
        ios: IOSParameters;
        itunes: ITunesParameters;
        navigation: NavigationParameters;
        social: SocialParameters;

        constructor(link: string, dynamicLinkDomain: string);
      }

      interface AnalyticsParameters {
        setCampaign(campaign: string): DynamicLink;
        setContent(content: string): DynamicLink;
        setMedium(medium: string): DynamicLink;
        setSource(source: string): DynamicLink;
        setTerm(term: string): DynamicLink;
      }

      interface AndroidParameters {
        setFallbackUrl(fallbackUrl: string): DynamicLink;
        setMinimumVersion(minimumVersion: number): DynamicLink;
        setPackageName(packageName: string): DynamicLink;
      }

      interface IOSParameters {
        setAppStoreId(appStoreId: string): DynamicLink;
        setBundleId(bundleId: string): DynamicLink;
        setCustomScheme(customScheme: string): DynamicLink;
        setFallbackUrl(fallbackUrl: string): DynamicLink;
        setIPadBundleId(iPadBundleId: string): DynamicLink;
        setIPadFallbackUrl(iPadFallbackUrl: string): DynamicLink;
        setMinimumVersion(minimumVersion: string): DynamicLink;
      }

      interface ITunesParameters {
        setAffiliateToken(affiliateToken: string): DynamicLink;
        setCampaignToken(campaignToken: string): DynamicLink;
        setProviderToken(providerToken: string): DynamicLink;
      }

      interface NavigationParameters {
        setForcedRedirectEnabled(forcedRedirectEnabled: boolean): DynamicLink;
      }

      interface SocialParameters {
        setDescriptionText(descriptionText: string): DynamicLink;
        setImageUrl(imageUrl: string): DynamicLink;
        setTitle(title: string): DynamicLink;
      }

      interface LinksStatics {
        DynamicLink: typeof DynamicLink;
      }
    }

    // Source: https://github.com/firebase/firebase-js-sdk/blob/master/packages/functions-types/index.d.ts
    namespace functions {
      type HttpsErrorCode = { [name: string]: FunctionsErrorCode };

      /**
       * The set of Firebase Functions status codes. The codes are the same at the
       * ones exposed by gRPC here:
       * https://github.com/grpc/grpc/blob/master/doc/statuscodes.md
       *
       * Possible values:
       * - 'cancelled': The operation was cancelled (typically by the caller).
       * - 'unknown': Unknown error or an error from a different error domain.
       * - 'invalid-argument': Client specified an invalid argument. Note that this
       *   differs from 'failed-precondition'. 'invalid-argument' indicates
       *   arguments that are problematic regardless of the state of the system
       *   (e.g. an invalid field name).
       * - 'deadline-exceeded': Deadline expired before operation could complete.
       *   For operations that change the state of the system, this error may be
       *   returned even if the operation has completed successfully. For example,
       *   a successful response from a server could have been delayed long enough
       *   for the deadline to expire.
       * - 'not-found': Some requested document was not found.
       * - 'already-exists': Some document that we attempted to create already
       *   exists.
       * - 'permission-denied': The caller does not have permission to execute the
       *   specified operation.
       * - 'resource-exhausted': Some resource has been exhausted, perhaps a
       *   per-user quota, or perhaps the entire file system is out of space.
       * - 'failed-precondition': Operation was rejected because the system is not
       *   in a state required for the operation's execution.
       * - 'aborted': The operation was aborted, typically due to a concurrency
       *   issue like transaction aborts, etc.
       * - 'out-of-range': Operation was attempted past the valid range.
       * - 'unimplemented': Operation is not implemented or not supported/enabled.
       * - 'internal': Internal errors. Means some invariants expected by
       *   underlying system has been broken. If you see one of these errors,
       *   something is very broken.
       * - 'unavailable': The service is currently unavailable. This is most likely
       *   a transient condition and may be corrected by retrying with a backoff.
       * - 'data-loss': Unrecoverable data loss or corruption.
       * - 'unauthenticated': The request does not have valid authentication
       *   credentials for the operation.
       */
      type FunctionsErrorCode =
        | 'ok'
        | 'cancelled'
        | 'unknown'
        | 'invalid-argument'
        | 'deadline-exceeded'
        | 'not-found'
        | 'already-exists'
        | 'permission-denied'
        | 'resource-exhausted'
        | 'failed-precondition'
        | 'aborted'
        | 'out-of-range'
        | 'unimplemented'
        | 'internal'
        | 'unavailable'
        | 'data-loss'
        | 'unauthenticated';

      /**
       * An HttpsCallableResult wraps a single result from a function call.
       */
      interface HttpsCallableResult {
        readonly data: any;
      }

      /**
       * An HttpsCallable is a reference to a "callable" http trigger in
       * Google Cloud Functions.
       */
      interface HttpsCallable {
        (data?: any): Promise<HttpsCallableResult>;
      }

      /**
       * `FirebaseFunctions` represents a Functions app, and is the entry point for
       * all Functions operations.
       */
      interface Functions {
        /**
         * Gets an `HttpsCallable` instance that refers to the function with the given
         * name.
         *
         * @param name The name of the https callable function.
         * @return The `HttpsCallable` instance.
         */
        httpsCallable(name: string): HttpsCallable;

        /**
         * Changes this instance to point to a Cloud Functions emulator running
         * locally.
         *
         * See https://firebase.google.com/docs/functions/local-emulator
         *
         * @param origin the origin string of the local emulator started via firebase tools
         * "http://10.0.0.8:1337".
         */
        useFunctionsEmulator(origin: string): Promise<null>;

        [key: string]: any;
      }

      /**
       * firebase.functions.X
       */
      interface FunctionsStatics {
        /**
         * Uppercased + underscored variables of @FunctionsErrorCode
         */
        HttpsErrorCode: HttpsErrorCode;
      }

      interface HttpsError extends Error {
        /**
         * A standard error code that will be returned to the client. This also
         * determines the HTTP status code of the response, as defined in code.proto.
         */
        readonly code: FunctionsErrorCode;
        /**
         * Extra data to be converted to JSON and included in the error response.
         */
        readonly details?: any;
      }
    }

    namespace firestore {
      interface Firestore {
        readonly app: App;
        batch(): WriteBatch;
        collection(collectionPath: string): CollectionReference;
        disableNetwork(): Promise<void>;
        doc(documentPath: string): DocumentReference;
        enableNetwork(): Promise<void>;
        enablePersistence(enabled: boolean): Promise<void>;
        runTransaction(
          updateFunction: (transaction: Transaction) => Promise<any>
        ): Promise<any>;
        settings(settings: Settings): Promise<void>;
      }

      interface FirestoreStatics {
        Blob: typeof Blob;
        FieldPath: typeof FieldPath;
        FieldValue: typeof FieldValue;
        GeoPoint: typeof GeoPoint;
        enableLogging(enabled: boolean): void;
        setLogLevel(logLevel: 'debug' | 'error' | 'silent'): void;
      }

      interface CollectionReference {
        readonly firestore: Firestore;
        readonly id: string;
        readonly parent: DocumentReference;
        add(data: object): Promise<DocumentReference>;
        doc(documentPath?: string): DocumentReference;
        endAt(snapshot: DocumentSnapshot): Query;
        endAt(...varargs: any[]): Query;
        endBefore(snapshot: DocumentSnapshot): Query;
        endBefore(...varargs: any[]): Query;
        get(options?: Types.GetOptions): Promise<QuerySnapshot>;
        limit(limit: number): Query;
        onSnapshot(
          onNext: Query.ObserverOnNext,
          onError?: Query.ObserverOnError
        ): () => void;
        onSnapshot(observer: Query.Observer): () => void;
        onSnapshot(
          metadataChanges: MetadataChanges,
          onNext: Query.ObserverOnNext,
          onError?: Query.ObserverOnError
        ): () => void;
        onSnapshot(
          metadataChanges: MetadataChanges,
          observer: Query.Observer
        ): () => void;
        orderBy(
          fieldPath: string | FieldPath,
          directionStr?: Types.QueryDirection
        ): Query;
        startAfter(snapshot: DocumentSnapshot): Query;
        startAfter(...varargs: any[]): Query;
        startAt(snapshot: DocumentSnapshot): Query;
        startAt(...varargs: any[]): Query;
        where(
          fieldPath: string | FieldPath,
          op: Types.QueryOperator,
          value: any
        ): Query;
      }

      interface DocumentChange {
        readonly doc: DocumentSnapshot;
        readonly newIndex: number;
        readonly oldIndex: number;
        readonly type: 'added' | 'modified' | 'removed';
      }

      interface DocumentReference {
        readonly firestore: Firestore;
        readonly id: string | null;
        readonly parent: CollectionReference;
        readonly path: string;
        collection(collectionPath: string): CollectionReference;
        delete(): Promise<void>;
        get(options?: Types.GetOptions): Promise<DocumentSnapshot>;
        onSnapshot(
          onNext: DocumentReference.ObserverOnNext,
          onError?: DocumentReference.ObserverOnError
        ): () => void;
        onSnapshot(observer: DocumentReference.Observer): () => void;
        onSnapshot(
          metadataChanges: MetadataChanges,
          onNext: DocumentReference.ObserverOnNext,
          onError?: DocumentReference.ObserverOnError
        ): () => void;
        onSnapshot(
          metadataChanges: MetadataChanges,
          observer: DocumentReference.Observer
        ): () => void;
        set(data: object, writeOptions?: Types.SetOptions): Promise<void>;
        update(obj: object): Promise<void>;
        update(key1: Types.UpdateKey, val1: any): Promise<void>;
        update(
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any
        ): Promise<void>;
        update(
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any
        ): Promise<void>;
        update(
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any,
          key4: Types.UpdateKey,
          val4: any
        ): Promise<void>;
        update(
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any,
          key4: Types.UpdateKey,
          val4: any,
          key5: Types.UpdateKey,
          val5: any
        ): Promise<void>;
      }
      namespace DocumentReference {
        type ObserverOnNext = (documentSnapshot: DocumentSnapshot) => void;
        type ObserverOnError = (err: object) => void;
        interface Observer {
          next: ObserverOnNext;
          error?: ObserverOnError;
        }
      }

      interface DocumentSnapshot {
        readonly exists: boolean;
        readonly id: string | null;
        readonly metadata: Types.SnapshotMetadata;
        readonly ref: DocumentReference;
        data(): object | void;
        get(fieldPath: string | FieldPath): any | undefined;
      }

      class Blob {
        static fromBase64String(base64: string): Blob;
        static fromUint8Array(array: Uint8Array): Blob;
        isEqual(other: Blob): boolean;
        toBase64(): string;
        toUint8Array: Uint8Array;
      }

      class FieldPath {
        static documentId(): FieldPath;
        constructor(...segments: string[]);
      }

      class FieldValue {
        static delete(): FieldValue;
        static serverTimestamp(): FieldValue;
      }

      class GeoPoint {
        constructor(latitude: number, longitude: number);
        readonly latitude: number;
        readonly longitude: number;
      }

      class Path {
        static fromName(name: string): Path;
        constructor(pathComponents: string[]);
        readonly id: string | null;
        readonly isDocument: boolean;
        readonly isCollection: boolean;
        readonly relativeName: string;
        child(relativePath: string): Path;
        parent(): Path | null;
      }

      type MetadataChanges = {
        includeMetadataChanges: boolean;
      };

      interface Query {
        readonly firestore: Firestore;
        endAt(snapshot: DocumentSnapshot): Query;
        endAt(...varargs: any[]): Query;
        endBefore(snapshot: DocumentSnapshot): Query;
        endBefore(...varargs: any[]): Query;
        get(options?: Types.GetOptions): Promise<QuerySnapshot>;
        limit(limit: number): Query;
        onSnapshot(
          onNext: Query.ObserverOnNext,
          onError?: Query.ObserverOnError
        ): () => void;
        onSnapshot(observer: Query.Observer): () => void;
        onSnapshot(
          metadataChanges: MetadataChanges,
          onNext: Query.ObserverOnNext,
          onError?: Query.ObserverOnError
        ): () => void;
        onSnapshot(
          metadataChanges: MetadataChanges,
          observer: Query.Observer
        ): () => void;
        orderBy(
          fieldPath: string | FieldPath,
          directionStr?: Types.QueryDirection
        ): Query;
        startAfter(snapshot: DocumentSnapshot): Query;
        startAfter(...varargs: any[]): Query;
        startAt(snapshot: DocumentSnapshot): Query;
        startAt(...varargs: any[]): Query;
        where(
          fieldPath: string | FieldPath,
          op: Types.QueryOperator,
          value: any
        ): Query;
      }
      namespace Query {
        interface NativeFieldPath {
          elements?: string[];
          string?: string;
          type: 'fieldpath' | 'string';
        }

        interface FieldFilter {
          fieldPath: NativeFieldPath;
          operator: string;
          value: any;
        }

        interface FieldOrder {
          direction: string;
          fieldPath: NativeFieldPath;
        }

        interface QueryOptions {
          endAt?: any[];
          endBefore?: any[];
          limit?: number;
          offset?: number;
          selectFields?: string[];
          startAfter?: any[];
          startAt?: any[];
        }

        type ObserverOnNext = (querySnapshot: QuerySnapshot) => void;
        type ObserverOnError = (err: object) => void;
        interface Observer {
          next: ObserverOnNext;
          error?: ObserverOnError;
        }
      }

      interface QuerySnapshot {
        readonly docChanges: DocumentChange[];
        readonly docs: DocumentSnapshot[];
        readonly empty: boolean;
        readonly metadata: Types.SnapshotMetadata;
        readonly query: Query;
        readonly size: number;
        forEach(callback: (snapshot: DocumentSnapshot) => any): void;
      }
      namespace QuerySnapshot {
        interface NativeData {
          changes: Types.NativeDocumentChange[];
          documents: Types.NativeDocumentSnapshot[];
          metadata: Types.SnapshotMetadata;
        }
      }

      interface Settings {
        host?: string;
        persistence?: boolean;
        ssl?: boolean;
        timestampsInSnapshots?: boolean;
      }

      interface Transaction {
        delete(docRef: DocumentReference): WriteBatch;
        get(documentRef: DocumentReference): Promise<DocumentSnapshot>;
        set(
          documentRef: DocumentReference,
          data: Object,
          options?: Types.SetOptions
        ): Transaction;
        // multiple overrides for update() to allow strong-typed var_args
        update(docRef: DocumentReference, obj: object): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any
        ): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any
        ): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any
        ): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any,
          key4: Types.UpdateKey,
          val4: any
        ): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any,
          key4: Types.UpdateKey,
          val4: any,
          key5: Types.UpdateKey,
          val5: any
        ): WriteBatch;
      }

      interface WriteBatch {
        commit(): Promise<void>;
        delete(docRef: DocumentReference): WriteBatch;
        set(
          docRef: DocumentReference,
          data: object,
          options?: Types.SetOptions
        ): WriteBatch;
        // multiple overrides for update() to allow strong-typed var_args
        update(docRef: DocumentReference, obj: object): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any
        ): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any
        ): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any
        ): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any,
          key4: Types.UpdateKey,
          val4: any
        ): WriteBatch;
        update(
          docRef: DocumentReference,
          key1: Types.UpdateKey,
          val1: any,
          key2: Types.UpdateKey,
          val2: any,
          key3: Types.UpdateKey,
          val3: any,
          key4: Types.UpdateKey,
          val4: any,
          key5: Types.UpdateKey,
          val5: any
        ): WriteBatch;
      }

      namespace Types {
        interface NativeDocumentChange {
          document: NativeDocumentSnapshot;
          newIndex: number;
          oldIndex: number;
          type: string;
        }

        interface NativeDocumentSnapshot {
          data: {
            [key: string]: TypeMap;
          };
          metadata: SnapshotMetadata;
          path: string;
        }

        interface SnapshotMetadata {
          fromCache: boolean;
          hasPendingWrites: boolean;
        }

        type QueryDirection = 'asc' | 'ASC' | 'desc' | 'DESC';
        type QueryOperator = '=' | '==' | '>' | '>=' | '<' | '<=';

        interface TypeMap {
          type:
            | 'array'
            | 'boolean'
            | 'date'
            | 'documentid'
            | 'fieldvalue'
            | 'geopoint'
            | 'null'
            | 'number'
            | 'object'
            | 'reference'
            | 'string';
          value: any;
        }

        /** The key in update() function for DocumentReference and WriteBatch. */
        type UpdateKey = string | FieldPath;

        interface GetOptions {
          source: 'default' | 'server' | 'cache';
        }

        interface SetOptions {
          merge?: boolean;
        }
      }
    }
  }
}

declare module 'react-native-firebase/storage' {
  import { RNFirebase } from 'react-native-firebase';
  export type Storage = RNFirebase.storage.Storage;
  export type Reference = RNFirebase.storage.Reference;
  export type FullMetadata = RNFirebase.storage.FullMetadata;
  export type SettableMetadata = RNFirebase.storage.SettableMetadata;
  export type StorageTask<T> = RNFirebase.storage.StorageTask<T>;
  export type UploadTaskSnapshot = RNFirebase.storage.UploadTaskSnapshot;
  export type DownloadTaskSnapshot = RNFirebase.storage.DownloadTaskSnapshot;
  export type TaskEvent = RNFirebase.storage.TaskEvent;
  export type TaskState = RNFirebase.storage.TaskState;
}

declare module 'react-native-firebase/database' {
  import { RNFirebase } from 'react-native-firebase';
  export type Database = RNFirebase.database.Database;
  export type RnReference = RNFirebase.database.RnReference;
  export type QueryEventType = RNFirebase.database.QueryEventType;
  export type QuerySuccessCallback = RNFirebase.database.QuerySuccessCallback;
  export type QueryErrorCallback = RNFirebase.database.QueryErrorCallback;
  export type Query = RNFirebase.database.Query;
  export type DataSnapshot = RNFirebase.database.DataSnapshot;
  export type Reference = RNFirebase.database.Reference;
  export type DatabaseStatics = RNFirebase.database.DatabaseStatics;
  interface ThenableReference<T> extends Promise<T> {}
  interface ThenableReference<T> extends RNFirebase.database.Reference {}
}

declare module 'react-native-firebase/auth' {
  import { RNFirebase } from 'react-native-firebase';
  export type AuthResult = RNFirebase.auth.AuthResult;
  export type AuthProvider = RNFirebase.auth.AuthProvider;
  export type Auth = RNFirebase.auth.Auth;
  export type AuthStatics = RNFirebase.auth.AuthStatics;
}

declare module 'react-native-firebase/messaging' {
  import { RNFirebase } from 'react-native-firebase';
  export type Messaging = RNFirebase.messaging.Messaging;
  export type RemoteMessage = RNFirebase.messaging.RemoteMessage;
}

declare module 'react-native-firebase/iid' {
  import { RNFirebase } from 'react-native-firebase';
  export type InstanceId = RNFirebase.iid.InstanceId;
}

declare module 'react-native-firebase/notifications' {
  import { RNFirebase } from 'react-native-firebase';
  export type AndroidNotifications = RNFirebase.notifications.AndroidNotifications;
  export type Notifications = RNFirebase.notifications.Notifications;
  export type Notification = RNFirebase.notifications.Notification;
  export type NotificationOpen = RNFirebase.notifications.NotificationOpen;
  export type AndroidNotification = RNFirebase.notifications.AndroidNotification;
  export type IOSNotification = RNFirebase.notifications.IOSNotification;
  export type IOSAttachment = RNFirebase.notifications.IOSAttachment;
  export type IOSAttachmentOptions = RNFirebase.notifications.IOSAttachmentOptions;
}

declare module 'react-native-firebase/config' {
  import { RNFirebase } from 'react-native-firebase';
  export type ConfigSnapshot = RNFirebase.config.ConfigSnapshot;
  export type Config = RNFirebase.config.Config;
}

declare module 'react-native-firebase/crashlytics' {
  import { RNFirebase } from 'react-native-firebase';
  export type Crashlytics = RNFirebase.crashlytics.Crashlytics;
}

declare module 'react-native-firebase/links' {
  import { RNFirebase } from 'react-native-firebase';
  export type Links = RNFirebase.links.Links;
  export type DynamicLink = RNFirebase.links.DynamicLink;
  export type AnalyticsParameters = RNFirebase.links.AnalyticsParameters;
  export type AndroidParameters = RNFirebase.links.AndroidParameters;
  export type IOSParameters = RNFirebase.links.IOSParameters;
  export type ITunesParameters = RNFirebase.links.ITunesParameters;
  export type NavigationParameters = RNFirebase.links.NavigationParameters;
  export type SocialParameters = RNFirebase.links.SocialParameters;
}

declare module 'react-native-firebase/functions' {
  import { RNFirebase } from 'react-native-firebase';
  export type HttpsErrorCode = RNFirebase.functions.HttpsErrorCode;
  export type FunctionsErrorCode = RNFirebase.functions.FunctionsErrorCode;
  export type HttpsCallableResult = RNFirebase.functions.HttpsCallableResult;
  export type Funtions = RNFirebase.functions.Functions;
  export type HttpsError = RNFirebase.functions.HttpsError;
}

declare module 'react-native-firebase/firestore' {
  import { RNFirebase } from 'react-native-firebase';
  export type Firestore = RNFirebase.firestore.Firestore;
  export type FirestoreStatics = RNFirebase.firestore.FirestoreStatics;
  export type CollectionReference = RNFirebase.firestore.CollectionReference;
  export type DocumentChange = RNFirebase.firestore.DocumentChange;
  export type DocumentReference = RNFirebase.firestore.DocumentReference;
  export type DocumentSnapshot = RNFirebase.firestore.DocumentSnapshot;
  export type FieldPath = RNFirebase.firestore.FieldPath;
  export type FieldValue = RNFirebase.firestore.FieldValue;
  export type GeoPoint = RNFirebase.firestore.GeoPoint;
  export type Path = RNFirebase.firestore.Path;
  export type Query = RNFirebase.firestore.Query;
  export type QuerySnapshot = RNFirebase.firestore.QuerySnapshot;
  export type WriteBatch = RNFirebase.firestore.WriteBatch;
}
